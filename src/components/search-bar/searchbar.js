import React from 'react';
import style from './searchbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchBar() {
    return (
        <div className={style["searchbar"]}>
            <form className={style["searchbg"]}>
                <input className={style["inputbar"]}></input>
                <input className={style["inputbar-start"]}></input>
                <input className={style["inputbar-mid"]}></input>
                <input className={style["inputbar-end"]}></input>
                <button className={style["searchbtn"]}><AiOutlineSearch/></button>
            </form>
        </div>
    )
}