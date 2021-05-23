const logger = (request, response, next) => {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    next();
}
 

const syncHandler = (fn) => (req,res,next) => {
    try{
        fn(req,res,next);
    }catch(error){
        next(error);
    }
};

const errorHandler = (e,request,res,_) => {
    let code = 500;
    if (typeof e.code === 'number'){
        code = e.code;
        };
    


    return res.status(code || 500).json({
        message: e.message
    });
};



module.exports = {
    syncHandler,
    errorHandler,
    logger
}