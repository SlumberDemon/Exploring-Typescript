function getRandomHexColor(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return '#' + randomColor;
}

function getComplementaryColors(hexColor: string): string[] {
    const complementaryColors: string[] = [];
    for (let i = 0; i < 5; i++) {
        const randomComplementaryHexColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        const complementaryColor = '#' + randomComplementaryHexColor;
        complementaryColors.push(complementaryColor);
    }
    return complementaryColors;
}

const randomHexColor = getRandomHexColor();
const complementaryColors = getComplementaryColors(randomHexColor);

console.log('Random hex color: ' + randomHexColor);
console.log('Complementary colors: ' + complementaryColors.join(', '));
