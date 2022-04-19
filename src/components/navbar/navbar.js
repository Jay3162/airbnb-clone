import React from 'react';
import style from './navbar.module.css';
import { ReactComponentElement } from 'react';
import { RiGlobalLine } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

export default function NavBar() {
    const airLogo = new URL('./images/pngfind.com-airbnb-logo-png-133395.png', import.meta.url)
    return (
        <div className={style["nav-container"]}>
            <a><img className={style["airbnb-logo"]} src={airLogo} alt="logoImg"></img></a>
            <div className={style["span-container"]}>
                    <span className={style["span-el"]}>Places to stay</span>
                    <span className={style["span-el"]}>Experiences</span>
                    <span className={style["span-el"]}>Online Experiences</span>
                </div>
            <div className={style["right-nav"]}>
                    <span className={style["right-span-el"]}>Become a host</span>
                    <span className={style["right-span-el"]}><RiGlobalLine/></span>
                    <span className={style["right-span-el-i"]}>
                        <div className={style["profile-container"]}>
                            <div className={style["bars"]}><FaBars/></div>
                            <div className={style["profile"]}><CgProfile/></div></div>
                        </span>
                </div>
                
            </div>
    )
}