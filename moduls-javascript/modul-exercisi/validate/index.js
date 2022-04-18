export const validateNumber = (value) => {
    const num = Number(value)
    if (isNaN(num)) throw new Error(`Value ${value} is not a number`)
}


