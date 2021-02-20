
import React from 'react';



class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
      username: '',
      password: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right"  
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>
     
      <h1>React Wizard Form 🧙‍♂️</h1>
      <p className= 'step'>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
  
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success btn-block">Sign up</button>
    </React.Fragment>
  );
}


export default MasterForm












/*
function MyForm() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    isChecked: false,
    gender: "",
    price: 0,
  });
  

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  return (
    
     
      <form>
      <h3>Simple React Form</h3>

        <label>
          First Name:{" "}
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />

        </label> 

        <br/><br/>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
      
        <br/><br/>
      <label>
        Your Message:{" "}
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>

      <br/><br/>

      <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={state.isChecked}
          onChange={handleChange}
        />
{" "}
        Is Checked?
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />
{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />
{" "}
        Female
      </label>
    

      <br/><br/>
      
      <label>
        Price (between 0 and 50):
        <input
          type="range"
          name="price"
          min="0"
          max="50"
          value={state.price}
          onChange={handleChange}
        />
      </label>

      <br/><br/>
    <label> <button>Submit</button></label>
     
    
        <p>Name: {state.fname} {state.lname}</p>
      
      <p>Message: {state.message}</p>

      </form>
      
    
  )
}
export default MyForm
*/









