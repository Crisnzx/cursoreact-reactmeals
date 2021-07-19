import Meals from "../Meals/Meals";
import Card from "../UI/Card";
import Container from "../UI/Container";
import styles from './Main.module.css';

export default function Main(props) {

   return (
      <main className={styles.main}>
         <Container>
            <Card className="smaller secondary">
               <h2>Delicious Food, Delivered To You</h2>
               <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
               <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
            </Card>
            <Meals />
         </Container>
      </main>
   );
}