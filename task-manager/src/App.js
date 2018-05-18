import React, { Component } from 'react';
import './App.css';
import HomeworkContainer from './HomeworkContainer';
import LoginRegister from './LoginRegister';

class App extends Component {

	constructor(){

		super();

		this.state = {

			logged: false,

			registering: false,

			message:"",

			username:""
		}
	}

	hitEnter = (e) => {

		const key = e.charCode;

		if (key === 13){
			const buttonText = e.target.parentNode.nextSibling.childNodes[0].innerText;
			console.log(buttonText, 'buttonText');

			const pwInputVal = e.target.value;
			console.log(pwInputVal, "pwInputVal");

			const userInputVal = e.target.parentNode.previousSibling.childNodes[0].value;
			console.log(userInputVal, "userInputVal");

			this.logInRegister(userInputVal, pwInputVal, buttonText);
		} 
		
	}

	loginAndRegisterBtn = (e) => {
		
	
		const buttonText = e.target.innerText;

		const pwInputVal = e.target.parentNode.parentNode.childNodes[1].childNodes[0].value;

		const userInputVal = e.target.parentNode.parentNode.childNodes[0].childNodes[0].value;
	
		this.logInRegister(userInputVal, pwInputVal, buttonText);

	}


	logInRegister = async (username, password, buttonText)=>{

		if(buttonText === "Register"){

			const registerJSON = await fetch("http://localhost:9292/user/register",
			{
				method: "POST",
				credentials: 'include',
				body:JSON.stringify({username: username, password: password})
			})

			const registerResponse = await registerJSON.json();

			registerResponse.success  ? this.setState({logged:true, username:registerResponse.username}) : this.setState({message: registerResponse.message})
		}


		else {

			const loginJSON = await fetch("http://localhost:9292/user/login",
			{
				method: "POST",
				credentials: 'include',
				body:JSON.stringify({username: username, password: password})
			})

			const loginResponse = await loginJSON.json();

			loginResponse.success ? this.setState({logged:true, username:loginResponse.username}) : this.setState({message: loginResponse.message})

		}
	}


	changeRegistering = (e) => {

		const tabText = e.target.innerText;

		tabText === "Register" ? this.setState({registering: true}) : this.setState({registering: false});

	}

	logout = async (e) => {

		const logout = await fetch("http://localhost:9292/user/logout",
		
		{
			method: 'POST',
			credentials: 'include',
		})


		this.setState({
			logged: false,
			message: ''
		});
		
	}

	



  	render() {

  		// const logoutClass = this.state.logged ? 'logoutButton' : 'logoutNone'

    	return (
    	  <div className="App">

    	  	<div className="Header">

    	  		<div className="Logo"><div className="LogoTitle">TM</div></div>


    	  		<div className="HeadingContain">
    	  			<div className="Heading">GENERAL ASSEMBLY TASK MANAGER  </div>
					{this.state.logged ? <div className="Welcome">Welcome {this.state.username}</div> : null}
				</div>	
    	  	</div>


    	  	

    	  	{(this.state.message !== "" && !this.state.logged) ? <p> {this.state.message}</p> : null}


    	     

    	  	{this.state.logged ? <HomeworkContainer logout={this.logout}/> : <LoginRegister loginAndRegisterBtn={this.loginAndRegisterBtn} registering={this.state.registering} changeRegistering={this.changeRegistering} hitEnter={this.hitEnter}/>}  

     	   
     	 </div>
    	);
  	}
}
// <button id={logoutClass} onClick={this.logout}> Logout </button>

export default App;
