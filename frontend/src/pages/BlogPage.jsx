import React from 'react'
import SubHeader from '../component/SubHeader/SubHeader'
import bloghero from '../assets/img/bloghero.png'

const BlogPage = () => {
    return (
        <div>
            <SubHeader subheader={"News and Notice"} imageUrl={bloghero} />
        </div>
    )
}

export default BlogPage