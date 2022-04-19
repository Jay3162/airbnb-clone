import React from 'react';
import NavBar from '../navbar/navbar';
import style from './landing-page.module.css'
import SearchBar from '../search-bar/searchbar';

export default function LandingPage() {
    return (
        <div className={style["container"]}>
            <div className={style["top-half"]}>
                <NavBar/>
                <SearchBar/>
            </div>
            
            </div>
    )
}