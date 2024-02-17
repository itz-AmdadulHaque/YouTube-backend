// handling asycn operation and error, now we don't need to use try...catch 
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
        // if no error return the same function else error pass to next middleware)
    }
}

export { asyncHandler }


//alter native approach

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

//////explanation 
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}   // (func) => { return () => {}}
// const asyncHandler = (func) => async () => {}  // return async funciton
