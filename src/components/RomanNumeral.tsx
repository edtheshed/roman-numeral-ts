export class RomanNumeral {

    of(digit: number) {
        let roman = ""
        for (let index = 0; index < digit; index++) {
            roman+="I"            
        }
        return roman;
    }
}
