import { getOptionsForCategory } from './compatibility';

/**
 * Score a single item based on current build state.
 */
function scoreItem(item, buildState) {
  let score = 0;

  // 1. Build Type Match (e.g., 'gaming-pc', 'workstation-pc', 'complete-setup')
  // We infer the build type from workloadTags.
  const isGamingBuild = buildState.buildType === 'gaming-pc' || buildState.buildType === 'complete-setup';
  const isWorkstation = buildState.buildType === 'workstation-pc';

  if (isGamingBuild && item.workloadTags.includes('gaming')) score += 30;
  if (isWorkstation && item.workloadTags.includes('workstation')) score += 30;

  // 2. Goal Match (e.g., 'casual', 'competitive', '1440p-4k', 'heavy-multitasking')
  if (buildState.goal && item.workloadTags.includes(buildState.goal)) {
    score += 25;
  }

  // 3. Priority Tier Match (value, balanced, performance)
  if (item.performanceTier === buildState.priority) {
    score += 20;
  }

  // 4. Availability
  if (item.availability === 'in_stock') {
    score += 10;
  }

  // 5. Reasonable balance (e.g., if we chose a performance CPU, prefer performance other parts)
  // We can just rely on the priority match for now, or bump score if it matches the CPU's tier.
  if (buildState.selections.cpu) {
    if (item.performanceTier === buildState.selections.cpu.performanceTier) {
      score += 15;
    }
  }

  return score;
}

/**
 * Given a category and current build state, returns the top recommended compatible item.
 */
export function getRecommendedItem(category, buildState) {
  // 1. Get all valid, compatible options for this category based on current selections
  // We map selection IDs back to objects for the compatibility checker
  const resolvedSelections = {};
  for (const [cat, itemObj] of Object.entries(buildState.selections)) {
    resolvedSelections[cat] = itemObj; 
  }

  const validOptions = getOptionsForCategory(category, resolvedSelections);
  if (!validOptions || validOptions.length === 0) return null;

  // 2. Score them
  const scored = validOptions.map(item => ({
    item,
    score: scoreItem(item, buildState)
  }));

  // 3. Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // 4. Return the highest scoring item
  return scored[0].item;
}

/**
 * Auto-fill remaining steps with recommended items
 */
export const stepsOrder = [
  'cpu', 'gpu', 'motherboard', 'memory', 'storage', 'psu', 'cooling', 'cabinet', 'monitor'
];

export function getTargetSteps(buildType) {
  return buildType === 'complete-setup' 
    ? stepsOrder 
    : stepsOrder.filter(s => s !== 'monitor');
}

export function generateRecommendedBuild(buildState) {
  const newState = { ...buildState, selections: { ...buildState.selections } };
  
  // We only run through the steps relevant to the build type
  const targetSteps = getTargetSteps(buildState.buildType);

  for (const step of targetSteps) {
    // Re-resolve state dynamically so upstream choices affect downstream choices
    const recommendedItem = getRecommendedItem(step, newState);
    if (recommendedItem) {
      newState.selections[step] = recommendedItem;
    }
  }

  return newState;
}
