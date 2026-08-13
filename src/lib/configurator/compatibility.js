import { catalog } from '../../data/catalog';

/**
 * Returns compatible motherboards for a given CPU.
 */
export function getCompatibleMotherboards(cpu) {
  const mbs = catalog.filter(item => item.category === 'motherboard');
  if (!cpu) return mbs;
  return mbs.filter(mb => mb.compatibility.socket === cpu.compatibility.socket);
}

/**
 * Returns compatible memory for a given motherboard.
 */
export function getCompatibleMemory(motherboard) {
  const rams = catalog.filter(item => item.category === 'memory');
  if (!motherboard) return rams;
  return rams.filter(ram => ram.compatibility.memoryType === motherboard.compatibility.memoryType);
}

/**
 * Returns compatible storage for a given motherboard.
 * Simplified for v1: just return all NVMe drives, as all our modern boards support them.
 */
export function getCompatibleStorage(motherboard) {
  return catalog.filter(item => item.category === 'storage');
}

/**
 * Returns compatible PSUs for a given CPU and GPU combination.
 */
export function getCompatiblePSUs(cpu, gpu) {
  const psus = catalog.filter(item => item.category === 'psu');
  if (!cpu && !gpu) return psus;

  let cpuWatts = cpu ? cpu.compatibility.wattClass : 65;
  let gpuBoardWatts = gpu ? gpu.compatibility.boardPowerW : 0;
  let gpuRecSysWatts = gpu ? gpu.compatibility.recommendedSystemPowerW : 0;

  // Add 100W safety allowance
  const computedRequirement = cpuWatts + gpuBoardWatts + 100;
  const requiredPsuW = Math.max(gpuRecSysWatts, computedRequirement);

  return psus.filter(psu => psu.compatibility.wattage >= requiredPsuW);
}

/**
 * Returns compatible coolers for a given CPU.
 */
export function getCompatibleCoolers(cpu) {
  const coolers = catalog.filter(item => item.category === 'cooling');
  if (!cpu) return coolers;

  return coolers.filter(cooler => {
    const supportsSocket = cooler.compatibility.supportedSockets.includes(cpu.compatibility.socket);
    const hasCapacity = cooler.compatibility.coolingTier >= cpu.compatibility.wattClass;
    return supportsSocket && hasCapacity;
  });
}

/**
 * Returns compatible cabinets based on MB, GPU, and Cooler sizes.
 */
export function getCompatibleCabinets(motherboard, gpu, cooler) {
  const cabinets = catalog.filter(item => item.category === 'cabinet');

  return cabinets.filter(cab => {
    // 1. Motherboard Form Factor (Simplified: check if any of the board's form factors are supported)
    let mbFits = true;
    if (motherboard) {
      mbFits = motherboard.compatibility.formFactors.some(ff => 
        cab.compatibility.supportedFormFactors.includes(ff)
      );
    }

    // 2. GPU Length
    let gpuFits = true;
    if (gpu) {
      gpuFits = gpu.compatibility.lengthMm <= cab.compatibility.maxGpuLengthMm;
    }

    // 3. Cooler height or radiator size
    let coolerFits = true;
    if (cooler) {
      if (cooler.compatibility.type === 'air') {
        coolerFits = cooler.compatibility.heightMm <= cab.compatibility.maxCoolerHeightMm;
      } else if (cooler.compatibility.type === 'aio') {
        coolerFits = cab.compatibility.supportedRadiators.includes(cooler.compatibility.radiatorSize);
      }
    }

    return mbFits && gpuFits && coolerFits;
  });
}

/**
 * Generic filter wrapper for the step UI
 */
export function getOptionsForCategory(category, selections) {
  const catItems = catalog.filter(item => item.category === category);
  
  // Safe fallback if logic filters out everything
  const fallback = (filtered) => filtered.length > 0 ? filtered : catItems;

  switch(category) {
    case 'cpu':
      return catItems; // CPUs dictate the build, no upstream hard filters usually
    case 'motherboard':
      return fallback(getCompatibleMotherboards(selections.cpu));
    case 'memory':
      return fallback(getCompatibleMemory(selections.motherboard));
    case 'storage':
      return fallback(getCompatibleStorage(selections.motherboard));
    case 'gpu':
      return catItems; 
    case 'psu':
      return fallback(getCompatiblePSUs(selections.cpu, selections.gpu));
    case 'cooling':
      return fallback(getCompatibleCoolers(selections.cpu));
    case 'cabinet':
      return fallback(getCompatibleCabinets(selections.motherboard, selections.gpu, selections.cooling));
    case 'monitor':
      return catItems;
    default:
      return catItems;
  }
}
