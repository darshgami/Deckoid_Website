import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Text Colors
  // Replace text-white exactly, but not if followed by /
  content = content.replace(/text-white\b(?!\/)/g, 'text-gray-900');
  content = content.replace(/text-white\/(90|80|70)/g, 'text-gray-600');
  content = content.replace(/text-white\/(60|50|40)/g, 'text-gray-500');
  content = content.replace(/text-white\/(30|20|10|5)/g, 'text-gray-400');
  
  // 2. Borders
  content = content.replace(/border-white\/(5|10|15|20|25|30)/g, 'border-gray-200');
  content = content.replace(/border-white\b/g, 'border-gray-200');
  
  // 3. Backgrounds
  content = content.replace(/bg-white\/(5|10|15|20)/g, 'glass-card');
  content = content.replace(/bg-midnight(\/(90|95|98|50|80))?/g, 'bg-transparent');
  content = content.replace(/bg-\[\#0b0b27\]/g, 'bg-transparent');
  content = content.replace(/bg-\[\#13072b\](\/[0-9]+)?/g, 'bg-transparent');
  
  // 4. Overlays and Vignettes
  content = content.replace(/from-midnight via-midnight\/50/g, 'from-white via-white/80');
  content = content.replace(/bg-premium-gradient/g, 'bg-transparent');
  
  // 5. Lavender Text -> Purple Accent
  content = content.replace(/text-lavender/g, 'text-accent-purple');
  content = content.replace(/text-indigo-[0-9]+/g, 'text-accent-purple');
  
  // 6. Focus Rings
  content = content.replace(/focus:border-lavender\/[0-9]+/g, 'focus:border-accent-purple');
  content = content.replace(/focus:ring-lavender\/[0-9]+/g, 'focus:ring-accent-purple/30');

  // 7. Gradients (specifically the ones we added earlier)
  content = content.replace(/bg-gradient-to-r from-deep-purple via-midnight to-secondary-bg/g, 'bg-transparent');
  content = content.replace(/bg-gradient-to-r from-midnight via-deep-purple to-midnight/g, 'bg-transparent');

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.jsx')) {
            callback(filePath);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

walkSync('d:/deckoid main/Deckodi Solution/src', replaceInFile);
console.log('Replaced classes successfully.');
