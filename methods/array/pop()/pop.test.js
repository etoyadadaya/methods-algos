import { myPop } from "./pop";

describe('pop method', () => {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    const myPlants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    test('pop element', () => {
        expect(plants.pop()).toEqual(myPop(myPlants));
    });
});