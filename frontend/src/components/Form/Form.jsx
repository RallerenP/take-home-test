import "./Form.css";
import { createUser } from "../../api/users";

function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    
    const user = { 
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      country: e.target.country.value
    }

    // Clear the form after submit
    e.target.firstname.value = "";
    e.target.lastname.value = "";
    e.target.country.value = "";

    // Tell parent component that a new user has been added
    createUser(user).then(() => props.onAddUser(user));
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="name">Firstname</label>
      <input type="text" id="firstname" />

      <label htmlFor="name">Lastname</label>
      <input type="text" id="lastname" />

      <label htmlFor="name">Country</label>
      <input type="text" id="country" />

      <button>Submit form</button>
    </form>
  );
}

export default Form;
