import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "./api/users";
import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers().then((users) => setUsers(users));
  }, [])

  function onAddUser() {
    getAllUsers().then((users) => setUsers(users));
  }

  return (
    <div className="app">
      {/* Form */}
      <Form onAddUser={onAddUser}/>

      {/* Users */}
      {users !== null && users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
