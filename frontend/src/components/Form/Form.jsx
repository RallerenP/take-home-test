import "./Form.css";
import { createUser } from "../../api/users";
import { useState } from "react";
import { getAllWorkplaces } from "../../api/workplaces";

function Form({onAddUser, workplaces}) {
  function onSubmit(e) {
    e.preventDefault();
    
    const user = { 
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      country: e.target.country.value,
      workplace_id: e.target.workplace.value
    }

    // Clear the form after submit
    e.target.firstname.value = "";
    e.target.lastname.value = "";
    e.target.country.value = "";

    // Tell parent component that a new user has been added
    createUser(user).then(() => onAddUser(user));
  }

  return (
    <form onSubmit={onSubmit} className="bg-white shadow p-4 rounded">
      <h1 className="text-3xl font-semibold">User form</h1>

      <div className="w-full flex flex-col py-2">
        <label htmlFor="name" className="text-lg my-1">Firstname</label>
        <input placeholder="Enter firstname here..." className="border rounded p-1 text-xl" type="text" id="firstname" />
      </div>
      
      <div className="w-full flex flex-col py-2">
        <label htmlFor="lastname" className="text-lg my-1">Lastname</label>
        <input placeholder="Enter lastname here..." className="border rounded p-1 text-xl" type="text" id="lastname" />  
      </div>
      
      <div className="w-full flex flex-col py-2">
        <label htmlFor="country" className="text-lg my-1">Country</label>
        <input placeholder="Enter country here..." className="border rounded p-1 text-xl" type="text" id="country" />
      </div>

      <div className="w-full flex flex-col py-2">
        <label htmlFor="workplace" className="text-lg my-1">Workplace</label>
        <select name="workplace" className="border rounded p-1 text-xl">
          <option value="">Select workplace</option>
            { workplaces.map((workplace) => (
              <option key={workplace.id} value={workplace.id}>{workplace.name}</option>
            ))
          }
        </select>
      </div>
      <button class="w-full bg-blue-800 p-2 text-white font-bold rounded-full mt-4">Submit form</button>
    </form>
  );
}

export default Form;
