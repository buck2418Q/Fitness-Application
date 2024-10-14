export const createResponse = (statusCode, message, toke = null) => {
    return {
        statusCode,
        message,
        toke: toke || null
    }
}