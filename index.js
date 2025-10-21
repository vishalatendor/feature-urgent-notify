const { TinyColor } = require('@ctrl/tinycolor');

// Sample code demonstrating @ctrl/tinycolor functionality
console.log('🎨 @ctrl/tinycolor Sample Code');
console.log('==============================');

// Create a color instance
const color = new TinyColor('#ff6b6b');

console.log('\n📋 Color Information:');
console.log(`Original color: ${color.toHexString()}`);
console.log(`RGB: ${color.toRgbString()}`);
console.log(`HSL: ${color.toHslString()}`);

// Color manipulation examples
console.log('\n🔧 Color Manipulations:');
console.log(`Lighten 20%: ${color.lighten(20).toHexString()}`);
console.log(`Darken 20%: ${color.darken(20).toHexString()}`);
console.log(`Saturate 50%: ${color.saturate(50).toHexString()}`);
console.log(`Desaturate 50%: ${color.desaturate(50).toHexString()}`);

// Generate color palette
console.log('\n🎨 Color Palette:');
const palette = [
  color.toHexString(),
  color.lighten(20).toHexString(),
  color.lighten(40).toHexString(),
  color.darken(20).toHexString(),
  color.darken(40).toHexString()
];

palette.forEach((colorHex, index) => {
  console.log(`  ${index + 1}. ${colorHex}`);
});

// Check if color is valid
console.log('\n✅ Validation:');
console.log(`Is valid color: ${color.isValid}`);
console.log(`Brightness: ${color.getBrightness()}`);
console.log(`Luminance: ${color.getLuminance()}`);

console.log('\n✨ Sample code completed successfully!');
