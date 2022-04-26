import React from 'react'
import style from './lower-tabs.module.css'


export default function LowerTab () {

    const caves = new URL('./images/caves.jpg', import.meta.url)
    const rental = new URL('./images/vacation-rental.webp', import.meta.url)
    const card = new URL('./images/airbnb-gift-card.jpg', import.meta.url)
    const card2 = new URL('./images/airbnb-card-bg.png', import.meta.url)
    const card3 = new URL('./images/airbnb-card-bg2.png', import.meta.url)
    const fieldBg = new URL('./images/women-road-brunette-flowers-wallpaper.jpg', import.meta.url)
    return (
        <div className={style["container"]}>
            <p className={style["title"]}>Discover airbnb Experiences</p>
            <div className={style["tabs"]}>
                <div className={style["tab"]}>
                    <img className={style["tab-img"]} src={caves}></img>
                    <div className={style["tab-inner"]}>
                        <p className={style["tab-txt"]}>Things to do on your trip</p>
                        <button className={style["tab-btn"]}>Experiences</button>
                    </div>
                </div>
                <div className={style["tab"]}>
                    <img className={style["tab-img"]} src={caves}></img>
                    <div className={style["tab-inner"]}>
                        <p className={style["tab-txt"]}>Things to do from home</p>
                        <button className={style["tab-btn"]}>Online Experiences</button>
                    </div>
                </div>
            </div>
            <div className={style["gift-cards"]}>
                <div className={style["card-txt"]}>
                    <p>Shop Airbnb gift cards</p>
                    <button className={style["gift-btn"]}>Learn more</button>
                </div>
                <div className={style["cards"]}>
                    <img className={style["card1"]} src={card}></img>
                    <img className={style["card2"]} src={card2}></img>
                    <img className={style["card3"]} src={card3}></img>
                </div>
            </div>
            <div className={style["last-tab"]}>
                <img className={style["last-tab-img"]} src={fieldBg}></img>
                <div className={style["last-tab-inner"]}>
                    <p className={style["last-tab-txt"]}>Questions about hosting?</p>
                    <button className={style["last-tab-btn"]}>Ask a Superhost</button>
                </div>
            </div>
        </div>
        
    )
}
