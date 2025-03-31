import express from 'express';
import { adminLogin } from '../controllers/adminController.js';
import { addNews } from '../controllers/newsController.js';
import { addGallery } from '../controllers/galleryController.js';
import upload from '../middlewares/multer.js'
import adminAuth from '../middlewares/adminAuth.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin);
adminRouter.post('/addnews', adminAuth, upload.single('image'), addNews)
adminRouter.post('/addPhotos', adminAuth, addGallery)


export default adminRouter;