// extending default Error, to throw custom error (error response)
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)  
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            // trace the error (where it was called)
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}