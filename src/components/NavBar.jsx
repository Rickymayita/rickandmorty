import styles from './NavBar.module.css'
import SearchBar from './SearchBar'
import React from 'react'

const NavBar = (props) => {
    return (
        <div>
            <SearchBar
                onSearch={(characterID) => window.alert(characterID)}
            />
        </div>
    )
}

export default NavBar