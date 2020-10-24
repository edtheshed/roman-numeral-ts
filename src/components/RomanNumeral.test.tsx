import React from 'react';
import { RomanNumeral } from './RomanNumeral';

test('roman numerals should', () => {
    let romanNumeral = new RomanNumeral();
    expect(romanNumeral.of(1)).toBe("I");
    expect(romanNumeral.of(2)).toBe("II");
    expect(romanNumeral.of(3)).toBe("III");
    expect(romanNumeral.of(5)).toBe("V");
    expect(romanNumeral.of(6)).toBe("VI");
});
