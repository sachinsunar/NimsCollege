import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
}, { timestamps: true })

const News = mongoose.models.News || new mongoose.model("News", newsSchema)

export default News;