import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import toast from 'react-hot-toast'



const AddNews = ({ token }) => {

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");





  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData()

      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);


      console.log(formData);



      const res = await axios.post(backendUrl + '/api/admin/addnews', formData, { headers: { token } })


      if (res.data.success) {
        toast.success(res.data.message);
        setTitle("");
        setContent("");
        setImage(false);
      }
      else {
        toast.error(res.data.message)
      }



    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
        toast.error(error.response.data.message || "Something went wrong!");
      } else {
        toast.error("Network error, please try again!");
      }
    }
  }


  useEffect(() => {
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      return () => URL.revokeObjectURL(imageUrl);
    }
  }, [image]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
      </div>

      <div className='flex gap-2 '>
        <label htmlFor="image">
          <img className='w-20' src={!image ? assets.upload_area : window.URL.createObjectURL(image)} alt="" />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
        </label>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Title</p>
        <input onChange={(e) => setTitle(e.target.value)} value={title} className='w-full max-w-[500px] px-2 py-2' type="text" placeholder='Enter Title' required />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Content</p>
        <textarea onChange={(e) => setContent(e.target.value)} value={content} className='w-full h-[250px] max-w-[500px] px-2 py-2' type="text" placeholder='Write content here' required />
      </div>




      <button type='submit' className='w-28 py-2 mt-4 text-white cursor-pointer bg-black'>
        Add
      </button>


    </form>
  )
}

export default AddNews