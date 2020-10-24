export class RomanNumeral {

    of(digit: number) {
        let roman = ""
        if (digit>=5){
            roman+="V"
            digit-=5
        }
        for (let index = 0; index < digit; index++) {
            roman+="I"            
        }
        return roman;
    }
}
