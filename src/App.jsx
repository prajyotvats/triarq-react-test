import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./assets/User";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);
  // const [updateFlag, setUpdateFlag] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const [user, setUser] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    birthdate: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  function getData() {
    axios
      .get("https://devservices.qpathways.com/otc/test/user")
      .then(({ data }) => setData(data))
      .catch((err) => console.log(Error("Data not found")));
  }

  useEffect(() => {
    getData();
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(user);
    axios
      .post("https://devservices.qpathways.com/otc/test/user/save", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // function handleUpdate(id) {
  //   axios
  //     .get(`https://devservices.qpathways.com/otc/test/user/${id}`)
  //     .then(({ data }) => {
  //       setTemp(data), setUpdateFlag(!updateFlag);
  //     })
  //     .catch((err) => console.log(Error("Data not found")));
  //   // console.log(temp);
  // }

  function deleteUser(id) {
    axios
      .delete(`https://devservices.qpathways.com/otc/test/user/delete/${id}`)
      .then(({ data }) => {
        console.log("deleted   ", data);
      })
      .catch((err) => console.log(Error("Data not found")));
    getData();
  }

  console.log(data);

  return (
    <div>
      {/* <User /> */}
      <div>
        <form className="user" onSubmit={handleSubmit}>
          <input
            type="text"
            value={user.firstname}
            name="firstname"
            placeholder="Enter firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="middlename"
            placeholder="Enter middlename"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Enter lastname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Enter gender"
            onChange={handleChange}
          />
          <input
            type="text"
            name="birthdate"
            placeholder="Enter birthdate in dd-mm-yy"
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="Enter state"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Enter country"
            onChange={handleChange}
          />
          <input
            type="text"
            name="zip"
            placeholder="Enter zip"
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      <br />
      {data.map((el) => {
        return (
          <div key={el.id}>
            {editingTodo === el.id ? (
              <User
                el={el}
                editingTodo={editingTodo}
                setEditingTodo={setEditingTodo}
                getData={getData}
              />
            ) : (
              <>
                <h1>Personal Information</h1>
                <p>{el.birthdate}</p>
                <p>{el.city}</p>
                <p>{el.country}</p>
                <p>{el.firstname + el.lastname}</p>
                <p>{el.gender}</p>
                <p>{el.state}</p>
                <p>{el.zip}</p>
                <button type="button" onClick={() => setEditingTodo(el.id)}>
                  Edit
                </button>
                <button type="button" onClick={() => deleteUser(el.id)}>
                  Delete
                </button>
              </>
            )}
          </div>
        );
      })}
      {/* birthdate
: 
"27-10-1996"
city
: 
"pune"
country
: 
"india"
firstname
: 
"sandip"
gender
: 
"Male"
id
: 
"73b63a64-b083-11ed-8055-2d56aac33a4d"
lastname
: 
"bhinge"
middlename
: 
"shahu"
state
: 
"maharastra"
zip
: 
12345 */}
    </div>
  );
}

export default App;
