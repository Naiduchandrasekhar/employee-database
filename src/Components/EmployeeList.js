
const EmployeeList = ({empData, onDelete}) => {

  return (
    <div className="w-3/12 text-center bg-slate-100 p-2 text-lg overflow-y-scroll">
        Employee List
        <div>
          {empData.map((emp) => {
            return (
              <div key={emp.id} className="flex justify-center items-center bg-lime-200 m-2 p-2 ">
              <h1>{emp.firstName}</h1>
              <span className="ml-2 cursor-pointer" onClick={() => onDelete(emp.id)}>❌</span>
            </div>  
            )
          })}
        </div>
    </div>
  )
}

export default EmployeeList