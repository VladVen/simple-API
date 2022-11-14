import express from 'express'
import mongoose from "mongoose";
import router from "./PostsEndpoint/router.js";
import fileUpload from 'express-fileupload'

const PORT = 5000
const BD_URL = `mongodb+srv://vlaven:qwerty123@cluster0.mfetheg.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)


async function startApp () {
    try{
        await mongoose.connect(BD_URL)
        app.listen(PORT, () => console.log('server started'))
    } catch (e) {
        console.log(e)
    }
}

startApp()
