import "./App.css";
import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import { useState } from "react";

const initialValues = { username: "", phoneNumber: "", gender: "No Info" };

function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = () => {
    console.log(info);
  };
  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
