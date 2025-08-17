import Student from "./Student.jsx";


function App() {//parent 

  return (
    <>
      <Student name="Spongeball" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Syhrav" age={50} isStudent={false} />
      <Student name="sandy" age={16} isStudent={true} />
      <Student name="Larry" />
    </>
  );
}


export default App


