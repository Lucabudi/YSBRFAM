import React from "react";
import style from './style.module.css'

const Poster = (image) => {
    console.log(image)
    return(
        <div className={style.poster}>
            <img src={image.img} alt="posterImage" />
        </div>
    )
}

export default Poster