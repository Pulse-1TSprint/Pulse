const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')
const formData = require('form-data')
const formidable = require('formidable');
const fs = require('fs')

// Middleware import
const filesPayloadExists = require('./middleware/filesPayloadExist')
const fileExtLimiter = require('./middleware/fileExtLimiter')
const fileSizeLimiter = require('./middleware/fileSizeLimiter')
const { getTracks, getTrackInfo, getTrackName, createTrackInfo } = require('./database')


const PORT = process.env.PORT || 3500

const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:8080' }))

app.get('/api/track/:id', async (req, res) => {
    const id = req.params.id
    console.log(id);
    fileExtension = ".mp3"
    let name = await getTrackName(id)
    console.log(name);
    name = String(id) + name["track_name"] + fileExtension
    console.log(name);
    console.log(path.join(__dirname, '/model/music', name));
    res.sendFile(path.join(__dirname, '/model/music', name))
})



app.get('/api/tracks/:count', async (req, res) => {
    const count = Number(req.params.count)
    if (count < 1) return res.status(500).json({ status: "error", message: err })
    let songs = await getTracks(count)
    res.send(songs)

})

// app.post('/api/upload_onlyfile',
//     fileUpload({ createParentPath: true }),
//     filesPayloadExists,
//     fileExtLimiter(['.mp3']),
//     fileSizeLimiter,
//     function(req, res) {
//         const files = req.files
//         console.log(files);

//         Object.keys(files).forEach(key => {
//             const filepath = path.join(__dirname, '/model/music', files[key].name)
//             files[key].mv(filepath, (err) => {
//                 if (err) return res.status(500).json({ status: "error", message: err })
//             })
//         })

//         return res.json({ status: 'success', message: Object.keys(files).toString() })
//     }
// )

app.post('/api/upload', async (req, res) => {
    // Basic setup
    const form = new formidable.IncomingForm()
    const uploadFolder = path.join(__dirname, 'model', 'music')

    // Basic configuration
    form.multiples = true
    form.maxFileSize = 100 * 1024 * 1024 // 10MB
    form.uploadDir = uploadFolder

    //Parsing
    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.log("Error parsing the files");
            return res.status(400).json({
                status: "Fail",
                message: 'There was an error pursuing the files',
                error: err
            })
        }

        //Check if multiple files or single file
        if (!files.file.length) {
            //Single file

            const file = files.file
            const artist = fields.artist
            const name = fields.name
            const year = fields.year

            // Checks if the files are valid
            const isValid = isFileValid(file)
            const isDataValid = isFormDataValid()
            console.log(isValid);

            const fileName = name
            const extension = '.mp3'
            let id

            if (!isValid) {
                //throes error if the file isn't valid
                return res.status(400).json({
                    status: "Fail",
                    message: "The file type is not a valid type"
                })
            }

            try {
                // stores the filename in the database
                id = await createTrackInfo(artist, name, year)
                console.log(id);
            } catch (error) {
                res.json({
                    error
                })
            }

            try {
                // renames the file in the directory
                fs.renameSync(file.filepath, path.join(uploadFolder, id + fileName + extension))
                return res.status(200).json({
                    status: 'success',
                    message: 'File created succesfully'
                })
            } catch (error) {
                console.log(error);
            }


    } else {
        // Multiple files
        return res.status(400).json({
            status: 'Fail',
            message: "Multiple files uploaded"
        })
    }
    })
})

app.post('/api/upload_form', async function (req, res) {
    const form = formidable({ multiples: true })
    form.parse(req, async (err, fields, files) => {
        console.log('fields: ', fields);
        console.log('files: ', files);
        const artist = fields.artist
        const name = fields.name
        const year = fields.year
        const file = files.file
        console.log(file);

        const filepath = path.join(__dirname, '/model/music', name)
        file.mv(filepath, (err) => {
            if (err) return res.status(500).json({ status: "error", message: err })
        })

        // const result = await createTrackInfo(artist, name, year)
        // console.log(result);
        return res.json({ status: 'success' })
        res.send({ success: true });
    });
    // console.log(req.formData);
    // console.log(req)
    // console.log(req.body);
    // const { artist, name } = req.formData
    // console.log(artist);
    // console.log(name);
    // if (!artist || !name) {
    //     return res.status(501).json({ status: "error", message: "no artist or name"})
    // }

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


function isFileValid(file) {
    const type = path.extname(file["originalFilename"])
    return type === ".mp3"
}

function isFormDataValid() {
    return true
}