import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/UI/Modal';

function App() {
  return (
    <>
      <Header />
      <div className={styles.img} /> 
      <Main />
      <Modal />
    </>
  );
}

export default App;
