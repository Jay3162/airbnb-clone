import React from 'react';
import NavBar from '../navbar/navbar';
import style from './landing-page.module.css'
import SearchBar from '../search-bar/searchbar';

export default function LandingPage() {
    const cabin = new URL('./images/cabin.jpg', import.meta.url)

    const brightPic = new URL('./images/bright-pic.webp', import.meta.url)
    const windPic = new URL('./images/windPic.webp', import.meta.url)
    const newquay = new URL('./images/newquay.webp', import.meta.url)
    const limeRegis = new URL('./images/lyme-regis.webp', import.meta.url)
    return (
        <div className={style["container"]}>
            <div className={style["top-half"]}>
                <NavBar/>
                <SearchBar/>
                <div className={style["firstbanner"]}>
                    <p className={style["banner-title"]}>Lorem ipsum dolor sit amet, consectetur</p>
                    <button className={style["banner-btn"]}>Learn more</button>
                </div>
            </div>
            <div className={style["pic-ban"]}>
                <img src={cabin} className={style["pic-ban-img"]}></img>
                <p className={style["pic-ban-txt"]}>Let your curiousity do the booking</p>
                <button className={style["pic-ban-btn"]}>I'm flexible</button>
            </div>

            <div className={style["next-trip"]}>
                <p className={style["trip-title"]}>Inspiration for your next trip
</p>
                <div className={style["tabs"]}>
                    <span className={style["tab"]}>
                        <img className={style["tab-img"]} src={brightPic}></img>
                        <div className={style["tab-lower"]}>
                            <p className={style["location"]}>Brighton</p>
                            <p className={style["miles"]}>49 miles away</p>
                        </div>
                    </span>
                    <span className={style["tab"]}>
                        <img className={style["tab-img"]} src={windPic}></img>
                        <div className={style["tab-lower"]}>
                            <p className={style["location"]}>Windermere</p>
                            <p className={style["miles"]}>221 miles away</p>
                        </div>
                    </span>
                    <span className={style["tab"]}>
                        <img className={style["tab-img"]} src={newquay}></img>
                        <div className={style["tab-lower"]}>
                            <p className={style["location"]}>Newquay</p>
                            <p className={style["miles"]}>209 miles away</p>
                        </div>
                    </span>
                    <span className={style["tab"]}>
                        <img className={style["tab-img"]} src={limeRegis}></img>
                        <div className={style["tab-lower"]}>
                            <p className={style["location"]}>Lyme Regis</p>
                            <p className={style["miles"]}>115 miles away</p>
                        </div>
                    </span>

                </div>
            </div>
            
            </div>
    )
}