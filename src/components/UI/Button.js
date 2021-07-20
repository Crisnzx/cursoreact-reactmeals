import './Button.css';

export default function Button(props) {


   return (
      <button
         className={`btn ${props.className}`}
         onClick={props.onClick}
      >{props.children}</button>
   );
}