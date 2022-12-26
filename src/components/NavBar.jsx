import styles from './NavBar.module.css'
import SearchBar from './SearchBar'
import React from 'react'
import head from '../img/head.png'

const NavBar = (props) => {
    return (
        <div className={styles.nav}>
            <div>
                <img className={styles.imgnav} src={head} alt="" />
            </div>
            <div>
                <SearchBar
                    onSearch={props.onSearch}
                />
            </div>
        </div>
    )
}

export default NavBar