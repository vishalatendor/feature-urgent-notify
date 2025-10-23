const { TinyColor } = require('@ctrl/tinycolor');

// Sample code demonstrating @ctrl/tinycolor functionality (v1.1.1)
console.log('🎨 @ctrl/tinycolor Sample Code (v1.1.1)');
console.log('========================================');

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

// Check color properties (v1.1.1 compatible)
console.log('\n✅ Color Analysis:');
console.log(`Is dark: ${color.isDark()}`);
console.log(`Is light: ${color.isLight()}`);
console.log(`Brightness: ${color.getBrightness()}`);
console.log(`Luminance: ${color.getLuminance()}`);

// Additional v1.1.1 features
console.log('\n🌈 Advanced Features:');
console.log(`Complement: ${color.complement().toHexString()}`);
console.log(`Analogous colors: ${color.analogous().map(c => c.toHexString()).join(', ')}`);
console.log(`Triad colors: ${color.triad().map(c => c.toHexString()).join(', ')}`);

console.log('\n✨ Sample code completed successfully!');
