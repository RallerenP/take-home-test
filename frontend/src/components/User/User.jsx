import "./User.css";
import { useState } from "react";
import { editUser, deleteUser } from "../../api/users";

function User({ user, onDeleteUser }) {
  const [ edit, setEdit ] = useState(false);
  
  const onToggleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    user.firstname = e.target.firstname.value;
    user.lastname = e.target.lastname.value;
    user.country = e.target.country.value;

    editUser(user).then(() => setEdit(false));
  }

  const onDelete = (e) => {
    e.preventDefault();
    deleteUser(user.id).then(() => onDeleteUser());
  }

  return (
    <form className="user" onSubmit={onSubmit}>
      <p>
        <span className="label">Firstname: </span>
        {edit ? 
          <input defaultValue={user.firstname} placeholder="Firstname" name="firstname" /> :
          user.firstname
        }
      </p>
      <p>
        <span className="label">Lastname: </span>
        {edit ?
          <input defaultValue={user.lastname} placeholder="Lastname" name="lastname" /> :
          user.lastname
        }
      </p>
      <p>
        <span className="label">Country: </span>
        {edit ?
          <input defaultValue={user.country} placeholder="Country" name="country" /> :
          user.country
        }
      </p>

      { edit ?
        <>
          <button type="submit">Confirm</button>
          <button onClick={onToggleEdit}>Cancel</button>
        </>
        :
        <button onClick={onToggleEdit}>Edit</button>
      }

      <button onClick={onDelete}>Delete</button>
    </form>
  );
}

export default User;
