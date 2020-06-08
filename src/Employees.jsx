import React from "react";

export default ({ employees }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th> PHONE NUMBER</th>
          <th>EMAIL</th>
          <th>GENDER</th>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.gender}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
