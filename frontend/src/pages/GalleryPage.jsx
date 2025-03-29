import React from 'react'
import SubHeader from '../component/SubHeader/SubHeader'
import galleryhero from '../assets/img/gallery.png'
import Campus from '../component/Campus/Campus'
import Title from '../component/Title/Title'

const GalleryPage = () => {
    return (
        <div>
            <SubHeader subheader={"Gallery "} imageUrl={galleryhero} />
            <div className='container'>
                <Title title={"Our Gallery"} />
                <Campus />
            </div>
        </div>
    )
}

export default GalleryPage