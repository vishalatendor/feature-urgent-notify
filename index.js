const { TinyColor } = require('@ctrl/tinycolor');

// Sample code demonstrating @ctrl/tinycolor functionality (v2.0.0)
console.log('🎨 @ctrl/tinycolor Sample Code (v2.0.0)');
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

// Check color properties (v2.0.0 compatible)
console.log('\n✅ Color Analysis:');
console.log(`Is valid color: ${color.isValid}`);
console.log(`Is dark: ${color.isDark()}`);
console.log(`Is light: ${color.isLight()}`);
console.log(`Brightness: ${color.getBrightness()}`);
console.log(`Luminance: ${color.getLuminance()}`);

// Advanced color theory features
console.log('\n🌈 Advanced Features:');
console.log(`Complement: ${color.complement().toHexString()}`);
console.log(`Analogous colors: ${color.analogous().map(c => c.toHexString()).join(', ')}`);
console.log(`Triad colors: ${color.triad().map(c => c.toHexString()).join(', ')}`);
console.log(`Monochromatic: ${color.monochromatic().map(c => c.toHexString()).join(', ')}`);

// Color manipulation features
console.log('\n🎯 Color Manipulation:');
console.log(`Greyscale: ${color.greyscale().toHexString()}`);
console.log(`Spin 60°: ${color.spin(60).toHexString()}`);
console.log(`Mix with blue: ${color.mix(new TinyColor('blue')).toHexString()}`);

// Additional v2.0.0 features
console.log('\n🆕 Version 2.0.0 Features:');
console.log(`Tint (mix with white): ${color.tint(50).toHexString()}`);
console.log(`Shade (mix with black): ${color.shade(50).toHexString()}`);
console.log(`Brighten: ${color.brighten(20).toHexString()}`);

// Color scheme generation
console.log('\n🎨 Color Schemes:');
console.log(`Split complement: ${color.splitcomplement().map(c => c.toHexString()).join(', ')}`);
console.log(`Tetrad: ${color.tetrad().map(c => c.toHexString()).join(', ')}`);

console.log('\n✨ Sample code completed successfully!');
