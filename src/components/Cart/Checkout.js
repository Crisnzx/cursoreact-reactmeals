import classes from './Checkout.module.css';

// now we need input and form validations, and then the data will be sent to firebase database!
export default function Checkout(props) {
  function submitFormHandler(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button onClick={props.onCloseModal} type="button">
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
}
