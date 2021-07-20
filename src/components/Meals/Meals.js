import styles from './Meals.module.css';
import Card from "../UI/Card";
import meals from '../../dummy_meals';
import Meal from "./Meal";

export default function Meals(props) {

   console.log(meals);
   
   return (
      <Card className="primary">
         <ul className={styles.list}>
         {meals.map(meal => {
            return (
               <Meal 
                  key={meal.id}
                  title={meal.title}
                  description={meal.description}
                  price={meal.price}
               />
            );
         })}               

         </ul>
      </Card>
   );
}