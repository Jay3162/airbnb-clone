import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style["footer-container"]}>
            <footer>
                <p className={style["title"]}>Inspiration for future getaways</p>
                <div className={style["span-wrapper"]}>
                    <span className={style["span-el"]}>Historic Destinations</span>
                    <span className={style["span-el"]}>Coastal Destinations</span>
                    <span className={style["span-el"]}>Island Destinations</span>
                    <span className={style["span-el"]}>Lake Destinations</span>
                    <span className={style["span-el"]}>Other Popular Destinations</span>
                </div>
                <div className={style["locations"]}>
                    <div className={style["loc-spans-set"]}>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Aberdeen</span>
                            <span className={style["country"]}>Scotland</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Aberystwyth</span>
                            <span className={style["country"]}>Wales</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Alnwick</span>
                            <span className={style["country"]}>England</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Bamburgh</span>
                            <span className={style["country"]}>England</span>
                        </div>
                    </div>
                    <div className={style["loc-spans-set"]}>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Berwick-upon-Tweed</span>
                            <span className={style["country"]}>England</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Boscastle</span>
                            <span className={style["country"]}>England</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Brittany</span>
                            <span className={style["country"]}>Bourgogne-Franche-Comte</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Budapest</span>
                            <span className={style["country"]}>Hungary</span>
                        </div>
                    </div>
                    <div className={style["loc-spans-set"]}>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Cardiff</span>
                            <span className={style["country"]}>Wales</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Castleton</span>
                            <span className={style["country"]}>England</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["exact-location"]}>Cheltenham</span>
                            <span className={style["country"]}>England</span>
                        </div>
                        <div className={style["loc-span"]}>
                            <span className={style["footer-span-btn"]}><button>Show more</button></span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}