import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Header />
      <div className={styles.img} /> 
      <Main />
    </>
  );
}

export default App;
