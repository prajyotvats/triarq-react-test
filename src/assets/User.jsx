import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function User({ el, setEditingTodo, editingTodo, getData }) {
  //   const [user, setUser] = useState({
  //     firstname: "",
  //     middlename: "",
  //     lastname: "",
  //     gender: "",
  //     birthdate: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //     id: "",
  //     zip: "",
  //   });

  const [user, setUser] = useState(el);
  //   console.log("user == ", user);
  //   console.log(editingTodo);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // https://devservices.qpathways.com/otc/test/user/update
    axios
      .put(`https://devservices.qpathways.com/otc/test/user/update`, user)
      .then(({ data }) => console.log("data updated", data))
      .catch((err) => console.log(Error("Data not found")));

    setEditingTodo(null);
    getData();
  }

  return (
    <div>
      <form className="user" onSubmit={handleSubmit} key={user.id}>
        <input
          type="text"
          value={user.firstname}
          name="firstname"
          placeholder="Enter firstname"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.middlename}
          name="middlename"
          placeholder="Enter middlename"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.lastname}
          name="lastname"
          placeholder="Enter lastname"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.gender}
          name="gender"
          placeholder="Enter gender"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.birthdate}
          name="birthdate"
          placeholder="Enter birthdate in dd-mm-yy"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.city}
          name="city"
          placeholder="Enter city"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.state}
          name="state"
          placeholder="Enter state"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.country}
          name="country"
          placeholder="Enter country"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.zip}
          name="zip"
          placeholder="Enter zip"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
  //   {
  // "firstname": "",
  // "middlename": "",
  // "lastname": "",
  // "gender": "",
  // "birthdate": "",
  // "city": "",
  // "state": "",
  // "country": "",
  // "zip":
  // }
}

export default User;
