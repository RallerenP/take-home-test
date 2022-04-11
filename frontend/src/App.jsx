import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "./api/users";
import { getAllWorkplaces } from "./api/workplaces";
import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";

function App() {
  const [users, setUsers] = useState(null);
  const [workplaces, setWorkplaces] = useState(null);

  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
    getAllWorkplaces().then((workplaces) => setWorkplaces(workplaces));
  }, [])

  const onAddUser = () => {
    getAllUsers().then((users) => setUsers(users));
  }

  const onDeleteUser = () => {
    getAllUsers().then((users) => setUsers(users));
  }

  return (
    <div className="app">
      
      {workplaces && (
        <>
          {/* Form */}
          <Form onAddUser={onAddUser} workplaces={workplaces}/>

          {/* Users */}
          {users !== null && users.map((user) => (
            <User key={user.id} user={user} onDeleteUser={onDeleteUser} workplaces={workplaces} />
          ))}  
        </>
      )}
      
    </div>
  );
}

export default App;
