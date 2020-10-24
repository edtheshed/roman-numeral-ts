export class RomanNumeral {

    of(digit: number) {
        let roman = ""
        let ones = digit % 10
        let tens = (digit - ones) % 100
        let hundreds = (digit - tens - ones) % 1000
        let thousands = (digit - hundreds - tens - ones) % 10000

        for (let index = 0; index < thousands / 1000; index++) {
            roman += "M"
            digit -= 1000
        }
        if (digit >= 500) {
            roman += "D"
            digit -= 500
            hundreds -= 500
        }

        for (let index = 0; index < hundreds / 100; index++) {
            roman += "C"
            digit -= 100
        }
        if (digit >= 50) {
            roman += "L"
            digit -= 50
            tens -= 50
        }

        for (let index = 0; index < tens / 10; index++) {
            roman += "X"
            digit -= 10
        }
        if (digit >= 5) {
            roman += "V"
            ones -= 5
        }

        for (let index = 0; index < ones; index++) {
            roman += "I"
        }

        return roman;
    }
}
