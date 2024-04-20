const EmployeeInformation = ({empData}) => {
  return <div className="w-9/12 text-center p-2 text-lg">
    <h1>Employee Information</h1>
    <div>
      {empData?.map(e => {
        return(
          <div className="border-2 m-2 bg-lime-200 flex justify-around items-center">
            <p>{e.firstName}</p>
            <p>{e.date}</p>
            <p>{e.email}</p>
          </div>
        )
      })}
    </div>
    </div>;
};

export default EmployeeInformation;
