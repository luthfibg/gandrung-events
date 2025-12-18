import React from 'react'
import '../../public/css/categorycard.css'
import '../../public/js/categorycard.js'

const CategoryCard = ({ name, link, backgroundImage, icon }) => {
  return (
    <>
        <div className="screen">
            <div className="screen-image" style={{ backgroundImage: backgroundImage }}></div>  
            {/* <div className="screen-overlay"></div>   */}
            <div className="screen-content">
                {/* <Presentation size={48} color='rgb(61, 49, 41)' /> */}
                {icon}
                <div className="screen-user">
                    <span className="name" data-value={name}>{name}</span>
                    <a className="link" href={link} target="_blank">Jelajahi</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default CategoryCard