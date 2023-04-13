import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import style from './style.module.scss'

const Header = () => {
    return(
        <div className={style.mainHeader}>
            <div className={style.mainHeaderContent}>
                <Logo>FAM</Logo>
                <div className={style.LinkGroup}>
                    <div className={style.LinkAlbero}>
                        <Link className={style.Link} to="/eventi">EVENTI</Link>
                        <Link className={style.Link} to="/test">NFT</Link>
                        <Link className={style.Link} to="/test">YSBR FAM</Link>
                    </div>
                    <div className={style.LinkSocial}>
                        <img src="/images/instagram.png" width={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header