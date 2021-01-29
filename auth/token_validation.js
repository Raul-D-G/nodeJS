const { verify } = require("jsonwebtoken");


module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, process.env.QWE, (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "Acesul nu este permis! Token invalid"
                    });
                } else {
                    next();
                }
            })
        } else {
            res.json({
                success: 0,
                message: "Acesul nu este permis! Lipseste Token-ul"
            });
        }
    }
}