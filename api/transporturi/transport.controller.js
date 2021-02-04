const { getTransporturi } = require("./transport.service");

const { sign } = require("jsonwebtoken");

module.exports = {
    getTransporturi: (req, res) => {
        getTransporturi((err, results) => {
            if (err) {
                console.error(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
}