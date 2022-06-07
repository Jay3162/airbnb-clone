import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style["footer-container"]}>
            <footer>
                <p className={style["title"]}>Inspiration for future getaways</p>
                <ul className={style["li-wrapper"]}>
                    <li>
                        <h4>Historic Destinations</h4>
                        <ul className={style["locations"]}>
                            <li>Aberdeen</li>
                            <li>Scotland</li>
                            <li>Berwick-upon-Tweed</li>
                            <li>England</li>
                            <li>Cardiff</li>
                            <li>Wales</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Coastal Destinations</h4>
                        <ul className={style["locations"]}>
                            <li>Aberystwyth</li>
                            <li>Wales</li>
                            <li>Boscastle</li>
                            <li>England</li>
                            <li>Castleton</li>
                            <li>England</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Lake Destinations</h4>
                        <ul className={style["locations"]}>
                            <li>Alnwick</li>
                            <li>England</li>
                            <li>Brittany</li>
                            <li>Bourgogne-Franche-Comte</li>
                            <li>Cheltenham</li>
                            <li>England</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Other Popular Destinations</h4>
                        <ul className={style["locations"]}>
                            <li>Bamburgh</li>
                            <li>England</li>
                            <li>Budapest</li>
                            <li>Hungary</li>
                            <a className={style["show-more-btn"]}>Show More</a>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h4></h4>
                        <ul>
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </div>
    )
}