import Button from '../UI/Button';
import styles from './Meal.module.css';

export default function Meal(props) {

   return (
      <li className={styles['list-item']}>
         <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
         </div>
         <div className={styles.amount}>
            <div >
            <label htmlFor={props.title}>Amount</label>
            <input
               id={props.title}
               name={props.title}
               type="number"
               step="1"
               
            />
            </div>
            <div className={`${styles.buttons}`}>
            <Button className="secondary small-p">-</Button>
            <Button className="secondary small-p">+</Button>
            </div>
         </div>
      </li>
   );
}