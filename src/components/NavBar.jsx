import styles from './NavBar.module.css'
import SearchBar from './SearchBar'
import React from 'react'
import head from '../img/head.png'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className={styles.nav}>
            <div className='styles.logo'>
                <Link to = '/home'><img className={styles.imgnav} src={head} alt="" /></Link>                
            </div>

            <div className='styles.enlaces'>
                    <Link to = '/home'><span>Home</span></Link>
                    <Link to = '/about'><span>About</span></Link>
                
            </div>

            <div className='styles.search'>
                <SearchBar
                    onSearch={props.onSearch}
                />
            </div>
        </div>
    )
}

export default NavBar