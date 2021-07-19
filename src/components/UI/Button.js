import styles from './Button.module.css';

export default function Button(props) {

   let secondStyle = '';

   if(props.className === 'primary') {
      secondStyle = styles.primary;
   }
   if(props.className === 'secondary') {
      secondStyle = styles.secondary;
   }

   return (
      <button
         className={`${styles.btn} ${secondStyle}`}
         onClick={props.onClick}
      >{props.children}</button>
   );
}