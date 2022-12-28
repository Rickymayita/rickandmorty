import Card from './Card';
import styles from './Cards.module.css'


export default function Cards(props) {
   const { character } = props;
   return (<div className={styles.cards}>
      {
         
         character.map((card) => {
            return <Card
               id={card.id}
               name={card.name}
               species={card.species}
               gender={card.gender}
               image={card.image}
               onClose={()=>props.onClose(card.id)}
            />
         })
      }
   </div>)
}
