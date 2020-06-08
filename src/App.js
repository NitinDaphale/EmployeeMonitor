import React, { useState } from "react";
import "./styles.css";
import Employees from "./Employees";
import Employee from "./Employee";

export default function App() {
  const [addFlag, setAddFlag] = useState(true);
  const [employeeList, setEmployees] = useState([]);

  const addEmployee = employee => {
    setAddFlag(false);
    const newList = [...employeeList, employee];
    setEmployees(newList);
  };

  const addEmpClick = () => {
    setAddFlag(true);
  };

  return (
    <div>
      {/* {addFlag && <button onClick={addEmpClick}>ADD EMP</button>} */}
      {<Employee addEmployee={addEmployee} />}
      {employeeList && employeeList.length && (
        <Employees employees={employeeList} />
      )}
    </div>
  );
}
