export function calculateTotal(selections) {
  let total = 0;
  for (const cat of Object.keys(selections)) {
    if (selections[cat]) {
      total += selections[cat].priceINR;
    }
  }
  return total;
}

export function generateNormalizedPayload(buildState, customerData) {
  const items = Object.values(buildState.selections)
    .filter(item => item !== null)
    .map(item => ({
      category: item.category,
      productId: item.id,
      name: item.name,
      brand: item.brand,
      quantity: 1,
      unitPriceINR: item.priceINR
    }));

  return {
    source: "custom-pc-configurator",
    buildId: buildState.buildId || crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    customer: {
      fullName: customerData.fullName,
      phone: customerData.phone,
      email: customerData.email,
      city: customerData.city,
      preferredContact: "whatsapp",
      notes: customerData.notes || ""
    },
    configuration: {
      buildType: buildState.buildType,
      priority: buildState.priority,
      goal: buildState.goal,
      mode: buildState.mode,
      items
    },
    pricing: {
      estimatedTotalINR: calculateTotal(buildState.selections),
      currency: "INR"
    }
  };
}

export function generateWhatsAppLink(payload) {
  const storePhone = "919876543210"; // Replace with actual WhatsApp Business number

  let msg = `*New Custom PC Build Request*\n\n`;
  msg += `*Customer:* ${payload.customer.fullName}\n`;
  msg += `*Phone:* ${payload.customer.phone}\n`;
  msg += `*City:* ${payload.customer.city}\n\n`;
  
  msg += `*Build:* ${payload.configuration.buildType}\n`;
  msg += `*Priority:* ${payload.configuration.priority}\n`;
  if (payload.configuration.goal) {
    msg += `*Goal:* ${payload.configuration.goal}\n`;
  }
  msg += `\n*Selected Components:*\n`;

  payload.configuration.items.forEach(item => {
    msg += `- ${item.category.toUpperCase()}: ${item.brand} ${item.name} (₹${item.unitPriceINR.toLocaleString()})\n`;
  });

  msg += `\n*Estimated Total:* ₹${payload.pricing.estimatedTotalINR.toLocaleString()}\n`;
  if (payload.customer.notes) {
    msg += `\n*Notes:* ${payload.customer.notes}\n`;
  }

  const encodedMsg = encodeURIComponent(msg);
  return `https://wa.me/${storePhone}?text=${encodedMsg}`;
}
