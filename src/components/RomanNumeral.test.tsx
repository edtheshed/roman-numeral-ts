import React from 'react';

class RomanNumeral {

    of(digit:number){
        if (digit===3){
            return "III"
        }
        if (digit===2){
            return "II";
        }
        return "I";
    }
}

test('roman numerals should', () => {
    let romanNumeral = new RomanNumeral();
    expect(romanNumeral.of(1)).toBe("I");
    expect(romanNumeral.of(2)).toBe("II");
    expect(romanNumeral.of(3)).toBe("III");
});
