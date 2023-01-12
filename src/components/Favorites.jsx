import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Favorites.module.css'
import Card from './Card'
import { filterCards, orderCards, reset } from "../redux/actions.js";


export default function Favorites(props) {
    const myFavorites = useSelector((s) => s.myFavorites)
    const character = props.character.filter((e) => {
        for (let i = 0; i < myFavorites.length; i++) {
            if(myFavorites[i].id=== e.id){
                return e
            }
        }
    })
    return (
        <>
            <div>
                <div className={styles.cards}>
                    {
                        character.map((card) => {
                            return <Card
                                id={card.id}
                                name={card.name}
                                species={card.species}
                                gender={card.gender}
                                image={card.image}
                                onClose={() => props.onClose(card.id)}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
} 
