import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';



export default function Cards(props) {
   const { character } = props;
   return (
      <div>
         <div className={styles.cards}>
            {
               character.map((card) => {
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
   )
}
