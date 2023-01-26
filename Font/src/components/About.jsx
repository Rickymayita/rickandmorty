import React from 'react'
import styles from './About.module.css'
import me from '../img/me.jpg'

export default function About(props) {
    return (
        <div>
            <div className={styles.Card}>
                <h1>About me</h1>
                <div>
                    <div className={styles.idCard} >
                        <div className={styles.name}><h1>Name: Ricardo Ariel Maya</h1></div>
                        <div className={styles.bodyId}>
                            <div className={styles.imgId}><img src={me} alt="Ricardo Ariel Maya" /></div>
                            <div className={styles.infId}>
                                <h2>Status: Alive</h2>
                                <h2>Species: Human</h2>
                                <h2>Gender: Male</h2>
                                <h2>Origin: Tierra</h2>
                            </div>
                        </div>
                        <div className={styles.footerId}><h1>GITHUB : /Rickymayita</h1></div>
                    </div>

                </div>

            </div>
        </div>

    )
}