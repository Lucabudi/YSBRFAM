import React, { Children } from 'react';
import { Link } from "react-router-dom";
import style from './style.module.scss'

const Logo = ({children, noAnimation}) => 
    <div className={noAnimation ? style.LogoNoAnimation : style.Logo}>
        <Link className={style.Link} to="/"><img   alt='logo' width="50px" src='/images/ysbr-logo.png' />{children}</Link>
    </div>
export default Logo

