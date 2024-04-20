import { useState } from "react";
import "./App.css";
import EmployeeInformation from "./Components/EmployeeInformation";
import EmployeeList from "./Components/EmployeeList";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [empData, setEmpData] = useState([]);
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({ firstName: "", lastName: "", email: "", phone: "", date: "" });

  const handleModal = (e) => {
    e.stopPropagation();
    setModal(!modal);
    setObj({id: uuidv4(), firstName: "", lastName: "", email: "", phone: "", date: "" });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    setEmpData([...empData, obj])
    setObj({id: "",  firstName: "", lastName: "", email: "", phone: "", date: "" });
  };

  const handleChange = (e) => {
  const {name, value} = e.target
  setObj({...obj, [name]: value})
  }

  console.log(empData)

  const handleDelete = (id) => {
  const filterData = empData.filter(e => e.id !== id)
  setEmpData(filterData)
  }

  return (
    <div
      className="p-4"
      onClick={() => {
        setModal(false);
      }}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Employee Database Management</h1>
        <button
          className="bg-gray-200 p-2 rounded-xl text-sm font-medium outline-none"
          onClick={(e) => handleModal(e)}
        >
          Add Employee
        </button>
      </div>
      <div className="flex justify-between border border-gray-500 mt-4 h-[90vh] relative">
        <EmployeeList empData={empData} onDelete={handleDelete} />
        {modal && (
          <form
            onSubmit={handleSubmitData}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100 p-2 h-[350px] w-[400px] absolute right-0 left-0 top-0 bottom-0 m-auto grid gap-8 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <input
                name="firstName"
                type="text"
                placeholder="FirstName"
                className="border-gray-700 border-2"
                onChange={(e) =>  handleChange(e)}
                value={obj.firstName}
              />
              <input
                name="lastName"
                type="text"
                placeholder="LastName"
                className="border-gray-700 border-2"
                onChange={(e) =>  handleChange(e)}
                value={obj.lastName}
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="border-gray-700 border-2 h-7"
              onChange={(e) =>  handleChange(e)}
              value={obj.email}
            />
            <input
              name="phone"
              type="phone"
              placeholder="Phone"
              className="border-gray-700 border-2 h-7"
              onChange={(e) =>  handleChange(e)}
              value={obj.phone}
            />
            <input
              name="date"
              type="date"
              placeholder="DOB"
              className="border-gray-700 border-2 h-7"
              onChange={(e) =>  handleChange(e)}
              value={obj.date}
            />
            <input
              type="submit"
              className="bg-gray-200 p-1 text-sm font-medium cursor-pointer"
            />
          </form>
        )}
        <EmployeeInformation empData={empData} />
      </div>
    </div>
  );
}

export default App;
