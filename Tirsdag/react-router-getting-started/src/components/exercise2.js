import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";
import apiFacade from "../facades/apiFacade";

function Exercise2() {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    //Change the callback to populate table (rather than just console logging)
    apiFacade.getPersons((data) => {
      setPersons(data);
    });
  }, [personToAddEdit]);

  const storeAddEditPerson = (person) => {
    apiFacade.addEditPerson(person, (data) => {
      setPersonToAddEdit(data);
      // setPersonToAddEdit(emptyPerson);
    });

    //Call this from the AddEditPerson control with the person to Add or Edit and Add/Edit via the apiFacade
  };

  const deletePerson = (id) => {
    apiFacade.deletePerson(id);
    setPersonToAddEdit(emptyPerson);
    //Call this from the AllPerson control with the id for the person to delete
  };

  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={storeAddEditPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default Exercise2;
