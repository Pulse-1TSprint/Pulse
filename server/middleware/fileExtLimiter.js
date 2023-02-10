const path = require('path')

const fileExtLimiter = function(allowedExtArray) {
    return function(req, res, next) {
        const files = req.files

        const fileExtentions = []
        Object.keys(files).forEach(key => {
            fileExtentions.push(path.extname(files[key].name))
        })

        // Are the file extension allowed?
        const allowed = fileExtentions.every(ext => allowedExtArray.includes(ext))

        if (!allowed) {
            const message = `Upload failed. Only ${allowedExtArray.toString()} files allowed.`.replaceAll(",", ", ")
            
            return res.status(422).json({ status: "error", message })
        }

        next()
    }
}


module.exports = fileExtLimiter