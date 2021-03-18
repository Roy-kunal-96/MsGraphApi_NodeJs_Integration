module.exports = (req, res, next) => {
    let token = req.header("access_token")
    if (token) {
        req.access_token = req.header("access_token")
        next();
    } else {
        return res.status(401).send({ message: "Access denied.No token Provided" })
    }



};