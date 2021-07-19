import Button from '../UI/Button';
import styles from './Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Container from '../UI/Container';

export default function Header(props) {


   return (
      <header className={styles.header}>
         <Container>
            <h1>ReactMeals</h1>
            <Button className='primary'>
               <IconContext.Provider value={{ color: 'white', size: '2rem' }} >
                  <FaShoppingCart />
               </IconContext.Provider>
               Your Cart
               <div className={styles['meals-number']}>
                  0
               </div>
            </Button>
         </Container>
      </header>
   );
}