import { v2 as cloudinary } from 'cloudinary'
import News from '../models/newsModel.js';

//function for add news
const addNews = async (req, res) => {
    try {

        const { title, content } = req.body;

        const image = req.file;

        if (!image) {
            return res.json({ success: false, message: "Image is required!" });
        }

        let result = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
        let imageURL = result.secure_url;


        const newsData = {
            title,
            content,
            image: imageURL,
        }

        const news = new News(newsData);
        await news.save()

        res.json({ success: true, message: "News/Notice Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export { addNews }