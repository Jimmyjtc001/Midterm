import React, { Component } from 'react';
import { REGISTER_PAGE_ID,LIST_PAGE_ID,TREE_ARR } from './constants';
import './App.css';

export default class LoginView extends Component{
  constructor(props){
    super(props);
    let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));
    this.state={
      username:"",
      password:"",

    }
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }
  onUsernameChange(event){
    this.setState({
      error:"",
    })
    this.setState({
      username:event.target.value,
    })
  }
  onPasswordChange(event){
    this.setState({
      error:"",
    })
    this.setState({
      password:event.target.value,
    })
  }
  onLoginClick(event){
    event.preventDefault();
    const { username,password } = this.state;

    let user = JSON.parse(localStorage.getItem("UserData"));
    let userDatum = {};
    let isFound = false;

  onRegisterClick(event){
    event.preventDefault();
    this.props.onPageChange(REGISTER_PAGE_ID);
  }
  render(){
    const { username,password, } = this.state;
    return(
      <div>
          <h1>Login</h1>
          <div >
        </div>
          <br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={ (event)=>{this.onUsernameChange(event)}}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={ (event)=>{this.onPasswordChange(event)}}
          />
          <br />
          <br />
          <button onClick={(event)=>{this.onLoginClick(event)}}>Login</button>
          <br />
          <br />
          <a href="#" onClick={this.onRegisterClick}>Click Here</a>
      </div>
    );
  }
}
