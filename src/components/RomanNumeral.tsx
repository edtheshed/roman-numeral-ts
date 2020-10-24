export class RomanNumeral {

    of(digit: number) {
        let roman = ""
        let ones = digit%10
        if (digit>=50){
            roman+="L"
            digit-=50
        }
        let tens = (digit-ones%100)/10
        if (digit>=10){
            for (let index = 0; index < tens; index++) {
                roman+="X"
               digit-=10
            }             
        }
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
