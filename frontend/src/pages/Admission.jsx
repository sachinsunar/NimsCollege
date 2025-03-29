import React from 'react'
import SubHeader from '../component/SubHeader/SubHeader'
import admissionhero from '../assets/img/admissionhero.jpg'

const Admission = () => {
    return (
        <div>
            <SubHeader subheader={"Admission Form"} imageUrl={admissionhero} />
        </div>
    )
}

export default Admission