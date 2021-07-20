import styles from './Modal.module.css';
import Button from './Button';

export default function Modal(props) {

   return (
      <div className={styles.overlay}>
         <div className={styles.modal}>
            <ul>

            </ul>
            <div className={styles.amount}>
               <h3>Total Amount</h3>
               <p>$88.99</p>
            </div>
            <div className={styles.buttons}>
               <Button className="tertiary small-p">Close</Button>
               <Button className="secondary small-p">Order</Button>
            </div>
         </div>
      </div>
   );
}