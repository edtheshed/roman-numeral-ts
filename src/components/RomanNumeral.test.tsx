import React from 'react';
import { RomanNumeral } from './RomanNumeral';

test('roman numerals should', () => {
    let romanNumeral = new RomanNumeral();
    expect(romanNumeral.of(1)).toBe("I");
    expect(romanNumeral.of(2)).toBe("II");
    expect(romanNumeral.of(3)).toBe("III");
    expect(romanNumeral.of(5)).toBe("V");
    expect(romanNumeral.of(6)).toBe("VI");
    expect(romanNumeral.of(7)).toBe("VII");
    expect(romanNumeral.of(8)).toBe("VIII");
    expect(romanNumeral.of(10)).toBe("X");
    expect(romanNumeral.of(11)).toBe("XI");
    expect(romanNumeral.of(15)).toBe("XV");
    expect(romanNumeral.of(16)).toBe("XVI");
    expect(romanNumeral.of(20)).toBe("XX");
    expect(romanNumeral.of(21)).toBe("XXI");
    expect(romanNumeral.of(25)).toBe("XXV");
    expect(romanNumeral.of(30)).toBe("XXX");
    expect(romanNumeral.of(50)).toBe("L");
    expect(romanNumeral.of(51)).toBe("LI");
    expect(romanNumeral.of(60)).toBe("LX");
});
