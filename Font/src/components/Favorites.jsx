import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Favorites.module.css'
import Card from './Card'
import { filterCards, orderCards, reset } from "../redux/actions.js";


export default function Favorites(props) {
    const dispatch = useDispatch()
    const myFavorites = useSelector((s) => s.myFavorites)
    /*const character = props.character.filter((e) => {
        for (let i = 0; i < myFavorites.length; i++) {
            if (myFavorites[i].id === e.id) {
                return e
            }
        }
    }) */

    const handleClick = (event) => {
        const { value, name } = event.target;
        if (name === 'filter') {
            return dispatch(filterCards(value))
        }
        if (name === 'order') {
            return dispatch(orderCards(value))
        }
    }

    return (
        <>
            <div>
                <div className={styles.cards}>
                    <div className={styles.selectores}>
                        <div className={styles.selects}>
                            <select className={styles.select} name='order' defaultValue={'DEFAULT'} onChange={handleClick}>
                                <option value="DEFAULT" disabled>Select Order</option>
                                <option value="Ascendente">Ascendente</option>
                                <option value="Descendente">Descendente</option>
                            </select>
                            <select className={styles.select} name='filter' defaultValue={'DEFAULT'} onChange={handleClick}>
                                <option value="DEFAULT" disabled>Select Filter</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Genderless">Genderless</option>
                                <option value="Unknown">Unknown</option>
                            </select>

                        </div>
                        <div>
                            <button onClick={() => dispatch(reset())}>
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {myFavorites?.map((card) => {
                        return <Card
                            key={card.id}
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
            </div>
        </>
    )
} 
