import React, { useState } from "react";
import '../../styles/Contact.css'

function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
  
      // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
      return name === 'firstName' ? setFirstName(value) : setEmail(email)
    };
  
    const [errorMessage, setErrorMessage ] = useState('')

    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();

      
      // Alert the user their first and last name, clear the inputs
      alert(`Hello ${firstName} your comment has been sent!`);
      setFirstName('');
      setEmail('');
    };
  
    return (
      <div>
        <h2>
          Contact
        </h2>
        <form className="flex-row justify-center justify-space-between-md align-center">
          <div className="col-12">
            <div className="col-12 titles">
              Name:
            </div>
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              className="input"
            />
          </div>
          <div className="col-12">
          <div className="col-12 titles">
              Email:
            </div>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              className="input"
            />
          </div>
          <div className="col-12">
          <div className="col-12 titles">
              Message:
            </div>
          <textarea
            name="thoughtText"
            className="form-input textarea"
            onChange={handleInputChange}
          ></textarea>
          </div>

          <div className="col-12">
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
 
  export default Form;