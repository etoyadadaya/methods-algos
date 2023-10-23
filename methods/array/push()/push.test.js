import { myPush } from "./push";

describe('push method', () => {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    const myPlants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    test('push element', () => {
        expect(plants.push('sunflower')).toEqual(myPush(myPlants, 'sunflower'));
    });
});