const express = require('express')
const app = express()
var cors = require('cors')
const download = require('image-downloader')
var bodyParser = require('body-parser')
const os = require('os');
const path = require('path')
const port = 3000
app.use(cors({
  origin : '*'
}))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/resgister',urlencodedParser, (req, res) => {
  res.send('Downloaded 😊')
  const options = {
    url: req.body.Username,
    dest: 'D:/youtube_download/download'                // will be saved to /path/to/dest/image.jpg
  }
download.image(options)
  .then(({ filename }) => {
    console.log('Saved to', filename)  // saved to /path/to/dest/image.jpg
  })
  .catch((err) => console.error(err))
}
)
app.listen(port, () => {
  
  console.log(`App listening on port ${port}`)
})

