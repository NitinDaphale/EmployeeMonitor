import React, { useState } from "react";
import "./styles.css";
import Employees from "./Employees";
import Employee from "./Employee";

export default function App() {
  const [employeeList, setEmployees] = useState([]);

  const addEmployee = employee => {
    const newList = [...employeeList, employee];
    setEmployees(newList);
  };

  return (
    <div>
      {<Employee addEmployee={addEmployee} />}
      {employeeList && employeeList.length > 0 && (
        <Employees employees={employeeList} />
      )}
    </div>
  );
}
