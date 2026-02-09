import { useState, useEffect } from "react";

function HooksConcepts() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
const [isValid,setIsValid] = useState(false);

  useEffect(() => {
    if (
      name.trim() !== "" &&
      email.includes("@") &&
      password.length > 6
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

  }, [name, email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted Successfully.");
  }

  return (
    <div >

      <h2>Live Form Validator</h2>

      <form onSubmit={handleSubmit} >

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
       

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
     <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <br /><br />

        <button disabled={!isValid}>
          Submit
        </button>

      </form>

    </div>
  );
}


export default HooksConcepts;
