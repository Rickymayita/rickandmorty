import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css'

export default function Detail(props) {
    const { detailId } = useParams()
    const [character, setCharacter] = React.useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div>
            <div className={styles.idCard} >
                <div className={styles.name}><h1>Nombre: {character.name}</h1></div>
                <div className={styles.bodyId}>
                    <div className={styles.imgId}><img src={character.image} alt="" /></div>
                    <div className={styles.infId}>
                        <h2>Status: {character.status}</h2>
                        <h2>Especie: {character.species}</h2>
                        <h2>Genero: {character.gender}</h2>
                        <h2>Origen: {character.origin?.name}</h2>
                    </div>
                </div>
                <div className={styles.footerId}><h1>IDENTIFICATION CARD</h1></div>
            </div>

        </div>
    );
}