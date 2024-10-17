import bcrypt from 'bcrypt'



export const passwordHash = (password) => {
    const hashedPassword = bcrypt.hash(password, 10)
    return hashedPassword;
}


export const createResponse = (statusCode, message, toke = null) => {
    return {
        statusCode,
        message,
        toke: toke || null
    }
}