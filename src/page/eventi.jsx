import React from "react";
import Poster from "../Components/Poster";
import style from './style.module.scss';

const Eventi = () => {
    return(
        <div className={style.Eventipage}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px'}}>
                <Poster img={`/images/wnft1.jpeg`} />
                <Poster img={`/images/wnft2.jpeg`} />
                <Poster img={`/images/snft1.jpeg`} />
                <Poster img={`/images/wknft3.png`} />
                <div className='modalPoster'>
                </div>
            </div>
        </div>
    )
}

export default Eventi