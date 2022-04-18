import { validateNumber} from '../validate/index.js'
import { SUM_NUM } from '../constants/index.js'

export function calculateSum(value) {
    validateNumber(value)
    const num = Number(value)
    const sum = num + SUM_NUM
    console.log(`The result of sumByTwo is ${sum}`)
}