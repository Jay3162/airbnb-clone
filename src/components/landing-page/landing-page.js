import React from 'react';
import NavBar from '../navbar/navbar';
import style from './landing-page.module.css'

export default function LandingPage() {
    return (
        <div className={style["container"]}>
            <div className={style["top-half"]}>
                <NavBar/>
            </div>
            
            </div>
    )
}