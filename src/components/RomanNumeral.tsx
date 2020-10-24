export class RomanNumeral {

    of(digit: number) {
        let roman = ""
        let ones = digit % 10
        let tens = ((digit - ones) % 100) / 10
        let hundreds = ((digit - tens * 10 - ones) % 1000) / 100
        let thousands = ((digit - hundreds * 100 - tens * 10 - ones) % 10000) / 1000
        //  console.log(hundreds)
        //  console.log(tens)
        //  console.log(ones)
        for (let index = 0; index < thousands; index++) {
            roman += "M"
            digit -= 1000
        }
        if (digit >= 500) {
            roman += "D"
            digit -= 500
            hundreds -= 5
        }

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
