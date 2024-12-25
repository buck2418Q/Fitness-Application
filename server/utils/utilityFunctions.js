import bcrypt from 'bcryptjs'



export const passwordHash = (password) => {
    const hashedPassword = bcrypt.hash(password, 10)
    return hashedPassword;
}


export const createResponse = (statusCode, message, token = null) => {
    return {
        statusCode,
        message,
        token: token || null
    }
}