module.exports = 
function toReadable (number) {
    const zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const divideByTen = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const fromTenToTwenty = {'11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen'}
    const hundred = 'hundred'

    const stringifyNumber = number.toString()
    switch (stringifyNumber.length) {
        case 1:
            return zeroToNine[number]
        case 2:{
            let result = '';
            const decimals = Math.floor(number / 10)
            const num = Math.floor(number - decimals * 10)
            const isInRange = (decimals * 10 + num > 10) && (decimals * 10 + num < 20)
            
            if (isInRange) return result += fromTenToTwenty[stringifyNumber[0] + stringifyNumber[1]]
            else {
                result += (decimals > 0) ? divideByTen[decimals] + ' ': ''
                result += (num > 0) ? zeroToNine[num] : ''
            }

            return result.trim()
        }
        case 3: {
            let result = ''
            const hundreds = Math.floor(number / 100)
            const decimals = Math.floor((number - (hundreds * 100)) / 10)
            const num = Math.floor(number - (hundreds * 100 + decimals * 10))
            const isInRange = (decimals * 10 + num >= 10) && (decimals * 10 + num < 20) && (decimals * 10 + num !== 10)

            result += zeroToNine[hundreds] + ' ' + hundred + ' '
            if (isInRange) return result += fromTenToTwenty[stringifyNumber[1] + stringifyNumber[2]]
            if (decimals * 10 + num === 10) return result += divideByTen[stringifyNumber[1]]
            else {
                result += (decimals > 0) ? divideByTen[decimals] + ' ': ''
                result += (num > 0) ? zeroToNine[num] : ''
            }

            return result.trim()
        }
    }
}
