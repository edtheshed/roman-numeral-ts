import React from 'react';

class RomanNumeral {

    of(digit:number){
        return "I";
    }
}

test('roman numerals should', () => {
    let romanNumeral = new RomanNumeral();
    expect(romanNumeral.of(1)).toBe("I");
});
