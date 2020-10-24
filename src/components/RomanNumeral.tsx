export class RomanNumeral {

    of(digit: number) {
        let roman = ""
        let ones = digit % 10
        let tens = ((digit - ones) % 100) / 10
        let hundreds = ((digit - tens * 10 - ones) % 1000) / 100
        //  console.log(hundreds)
        //  console.log(tens)
        //  console.log(ones)
        for (let index = 0; index < hundreds; index++) {
            roman += "C"
            digit -= 100
        }
        if (digit >= 50) {
            roman += "L"
            digit -= 50
            tens -= 5
        }

        for (let index = 0; index < tens; index++) {
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
