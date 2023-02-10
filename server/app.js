const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

// Middleware import
const filesPayloadExists = require('./middleware/filesPayloadExist')
const fileExtLimiter = require('./middleware/fileExtLimiter')
const fileSizeLimiter = require('./middleware/fileSizeLimiter')

const PORT = process.env.PORT || 3500

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/upload',
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(['.mp3', '.flac']),
    fileSizeLimiter,
    function(req, res) {
        const files = req.files
        console.log(files);

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'music', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
            })
        })

        return res.json({ status: 'success', message: Object.keys(files).toString() })
    }
)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))