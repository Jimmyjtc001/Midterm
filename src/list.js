import React, { Component } from 'react';
import { LOGIN_PAGE_ID,EDIT_PAGE_ID,VIEW_PAGE_ID } from './update';
import './App.css';


export default class ListView extends Component{
  constructor(props){
    super(props);
    let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));

    this.state={
      treeArr : treeArr,
      searchTerm:"",
      loggedInUser:JSON.parse(localStorage.getItem("Logged-in-User")),
    }
    this.onViewClick=this.onViewClick.bind(this);
    this.onEditClick=this.onEditClick.bind(this);
    this.onSearchChange=this.onSearchChange.bind(this);
    this.onLogoutClick=this.onLogoutClick.bind(this);
  }
onViewClick(event,id){
  event.preventDefault();
  this.props.onPageChange(VIEW_PAGE_ID,id);
}
onEditClick(event,id){
  event.preventDefault();
  this.props.onPageChange(EDIT_PAGE_ID,id)
}
onSearchChange(event){
  this.setState({
    searchTerm:event.target.value,
  })

}
onLogoutClick(event){
  localStorage.removeItem("Logged-in-User");
  this.setState({
    loggedInUser:"",
  })
  this.props.onPageChange(LOGIN_PAGE_ID);
}

  render(){
    const { treeArr,searchTerm,loggedInUser } = this.state;
    const filteredTreesArr = treeArr.filter(
      (treeObj)=>
            treeObj.name.toLowerCase().includes( searchTerm.toLowerCase() )
    )
      return(
        <div>
           <p >Welcome</p>
           <div>
               <h1>Tree List</h1>
               <center>
                   <input
                      type="text"
                      value={searchTerm}
                      placeholder="click here for serarch"
                      onChange={(event)=>this.onSearchChange(event)}
                  />
              </center>
              <br />

              <TreeList  onViewClick={this.onViewClick} onEditClick={this.onEditClick}/>
              <br /><br />

              <button onClick={(event)=>this.onLogoutClick(event)}>Logout</button>
          </div>
      </div>
      );
  }
}

function TreeList(props){
  let treeElements = props.treeArr.map(
    (treeObj) =>
    <tr>
      <td>{treeObj.name}</td>
      <td>
        <button  onClick={(event,id)=>{props.onViewClick(event,treeObj.id)}}>View</button>
        <button  onClick={(event,id)=>{props.onEditClick(event,treeObj.id)}}>Edit</button>
      </td>
    </tr>
    )
  return(
    <table>
      <tr>
        <th>Tree Name</th>
        <th>Description</th>
      </tr>
    </table>
  );
}
