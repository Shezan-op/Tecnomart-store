const fs = require('fs');
const catContent = fs.readFileSync('./src/data/catalog.js', 'utf-8');
const compContent = fs.readFileSync('./src/lib/configurator/compatibility.js', 'utf-8');
const recContent = fs.readFileSync('./src/lib/configurator/recommendation.js', 'utf-8');

let script = catContent.replace('export const catalog', 'const catalog');
script += compContent.replace(/export function/g, 'function').replace(/import { catalog } from '[^']+';/g, '');
script += recContent.replace(/export function/g, 'function').replace(/export const/g, 'const').replace(/import { getOptionsForCategory } from '[^']+';/g, '');

script += `
  try {
    const buildState = {
      buildType: 'gaming-pc',
      priority: 'balanced',
      goal: 'casual',
      selections: {}
    };
    const newState = generateRecommendedBuild(buildState);
    console.log('Success:', Object.keys(newState.selections));
  } catch (e) {
    console.error('Crash:', e.message);
    console.error(e.stack);
  }
`;

fs.writeFileSync('./scratch/test_compiled.js', script);
