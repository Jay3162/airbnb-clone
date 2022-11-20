import React from 'react'
import style from './lower-tabs.module.css'
import Footer from '../footer/footer'


export default function LowerTab () {

    return (
        <div className={style["container"]}>
            <div>
                <p className={style["title"]}>Discover airbnb Experiences</p>
            </div>
            
            <div className={style["tabs"]}>
                <div className={style["tab"]}>
                    {/* <img className={style["tab-img"]} src={caves}></img> */}
                    <div className={style["tab-inner"]}>
                        <p className={style["tab-txt"]}>Things to do on your trip</p>
                        <button className={style["tab-btn"]}>Experiences</button>
                    </div>
                </div>
                <div className={style["tab"]}>
                    {/* <img className={style["tab-img"]} src={caves}></img> */}
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
                    <div className={style["card1"]} ></div>
                    <div className={style["card2"]} ></div>
                    <div className={style["card3"]} ></div>
                </div>
            </div>
            <div className={style["last-tab"]}>
                {/* <img className={style["last-tab-img"]} src={fieldBg}></img> */}
                <div className={style["last-tab-img"]}>
                    <div className={style["last-tab-inner"]}>
                        <p className={style["last-tab-txt"]}>Questions about hosting?</p>
                        <button className={style["last-tab-btn"]}>Ask a Superhost</button>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
        
    )
}
