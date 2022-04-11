import "./User.css";
import { useState } from "react";
import { editUser, deleteUser } from "../../api/users";
import { useEffect } from "react";

function User({ user, onDeleteUser, workplaces }) {
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
    user.workplace_id = Number(e.target.workplace.value);

    editUser(user).then(() => setEdit(false));
  }

  const onDelete = (e) => {
    e.preventDefault();
    deleteUser(user.id).then(() => onDeleteUser());
  }

  return (
    <form className="user bg-white rounded my-4 justify-between text-xl" onSubmit={onSubmit}>
      <div className="flex flex-col lg:flex-row justify-evenly gap-4 px-4 py-2 break-all">
        <div className="flex flex-col my-2 ">
          <span className="label text-gray-600 text-lg">Firstname</span>
          {edit ? 
            <input className="user__input" defaultValue={user.firstname} placeholder="Firstname" name="firstname" /> :
            user.firstname
          }
        </div>
        
        <div className="flex flex-col my-2">
          <span className="label text-gray-600 text-lg">Lastname</span>
          {edit ?
            <input className="user__input" defaultValue={user.lastname} placeholder="Lastname" name="lastname" /> :
            user.lastname
          }
        </div>
        <div className="flex flex-col my-2">
          <span className="label text-gray-600 text-lg">Country</span>
          {edit ?
            <input className="user__input" defaultValue={user.country} placeholder="Country" name="country" /> :
            user.country
          }
        </div>
        <div className="flex flex-col my-2">
          <span className="label text-gray-600 text-lg">Workplace</span>
          {edit ?
            <select className="user__input" defaultValue={user.workplace_id} name="workplace">
              {workplaces.map((workplace) => (
                <option key={workplace.id} value={workplace.id}>{workplace.name}</option>
              ))}
            </select> 
            :
            workplaces.find((workplace) => workplace.id === user.workplace_id).name
          }
        </div>
      </div>
      <div className="bg-gray-200 px-4 py-2 flex justify-center">
        { edit ?
          <>
            <button className="user__button bg-emerald-500" type="submit">Confirm</button>
            <button className="user__button bg-orange-500" onClick={onToggleEdit}>Cancel</button>
          </>
          :
          <>
            <button className="user__button bg-emerald-500" onClick={onToggleEdit}>Edit</button>
            <button className="user__button bg-red-500" onClick={onDelete}>Delete</button>
          </>
          
        }

        
      </div>
    </form>
  );
}

export default User;
