import React, { useState, Fragment } from "react";

export default ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    name: "nitin",
    email: "test@gmail.com",
    phone: "",
    gender: "male",
    fooOptions: "Veg"
  });

  const onChange = e => {
    const target = e.target.name;
    const newValue = e.target.value;
    const newEmp = { ...employee };

    if (target === "name") newEmp.name = newValue;
    else if (target === "email") newEmp.email = newValue;
    else if (target === "phone") newEmp.phone = newValue;
    else if (target === "gender") newEmp.gender = newValue;
    else if (target === "foodOptions") newEmp.foodOptions = newValue;

    setEmployee(newEmp);
    console.log(newEmp);
  };

  const validateForm = emp => {
    if (!emp.name) {
      alert("Please input valid Name.");
      return false;
    }
    if (!emp.email) {
      alert("Please input valid Email.");
      return false;
    }
    if (!emp.phone) {
      alert("Please input valid PhoneNumber.");
      return false;
    }
    return true;
  };

  const onAddClick = e => {
    e.preventDefault();
    if (validateForm(employee)) {
      addEmployee(employee);
    }
  };

  return (
    <Fragment>
      <h1>Employee List</h1>
      <br />
      Name{" "}
      <input
        type="text"
        required
        name="name"
        value={employee.name}
        onChange={onChange}
      />
      <br />
      <br />
      Email{" "}
      <input
        type="email"
        name="email"
        value={employee.email}
        required
        onChange={onChange}
      />
      <br />
      <br />
      Phone{" "}
      <input
        type="number"
        name="phone"
        required
        value={employee.phone}
        onChange={onChange}
      />
      <br />
      <br />
      <div onChange={onChange}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
      <br />
      <br />
      <select value="Veg" name="foodOptions" onChange={onChange}>
        <option value="Veg">Veg</option>
        <option value="NonVeg">NonVeg</option>
        <option value="Eggetarian">Eggetarian</option>
      </select>
      <br />
      <br />
      <button onClick={onAddClick}>ADD</button>
    </Fragment>
  );
};
