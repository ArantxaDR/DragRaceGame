import { Calc } from "./calc";

describe('Calc', () => {
    let calc;
    beforeEach(() => {
        calc = new Calc();
    })

    test('should add 4 and 3', () => {
        const oper1 = 4;
        const oper2 = 3;

        const result = calc.add(oper1, oper2);

        expect(result).toBe(7);
    })

    test('should add -4 and 3', () => {
        const oper1 = -4;
        const oper2 = 3;

        const result = calc.add(oper1, oper2);

        expect(result).toBe(-1);
    })

    it('should minus 4 and 3', () => {
        const oper1 = 4;
        const oper2 = 3;

        const result = calc.minus(oper1, oper2);

        expect(result).toBe(1);
    })

    afterEach(() => {
        calc = null;
    })

})