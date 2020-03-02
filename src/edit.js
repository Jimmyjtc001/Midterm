import React, { Component } from 'react';
import { LIST_PAGE_ID } from './update.js';
import './App.css';

export default class UpdateView extends Component{
  constructor(props){
    super(props);
    let treeObj;
    let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));
    for (treeObj of treeArr){
      if(treeObj.id === props.id){
        console.log(treeObj);
        localStorage.setItem("Tree_Object",JSON.stringify(treeObj));
        break;
      }
    }
    this.state={
      error:"",
      message:"",
      treeArr:treeArr,
      name:treeObj.name,
      scientificName:treeObj.scientificName,
      treeImage:treeObj.treeImage,
      seedImage:treeObj.seedImage,
      description:treeObj.shortDescription,
    }
    this.onBackClick=this.onBackClick.bind(this);
    this.onNameChange=this.onNameChange.bind(this);
    this.onScientificNameChange=this.onScientificNameChange.bind(this);
    this.onTreeImageChange=this.onTreeImageChange.bind(this);
    this.onSeedImageChange=this.onSeedImageURLChange.bind(this);
    this.onDescriptionChange=this.onDescriptionChange.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }



onBackClick(event){
  event.preventDefault();
  this.props.onPageChange(LIST_PAGE_ID)
}
let treeArr = this.state.treeArr;
let treeObj;
for(treeObj of treeArr){
  if(treeObj.name.toLowerCase() === event.target.value.toLowerCase()){
    this.setState({
      message:"It's work. Please enter a new name"
    })
    break;
  }

}

}
onScientificNameChange(event){
  this.setState({
    scientificName:event.target.value,
  })
}
onTreeImageChange(event){
  this.setState({
    treeImageURL:event.target.value,
  })
}
onSeedImageChange(event){
  this.setState({
    seedImageURL:event.target.value,
  })
}
onDescriptionChange(event){
  this.setState({
    description:event.target.value,
  })
}
onUpdateClick(event){
  const { name,scientificName,treeImageURL,seedImageURL,description } = this.state;
  let treeArr = JSON.parse(localStorage.getItem("Tree_Arr"));
  let treeObj;
  for (treeObj of treeArr){
    if(treeObj.id === this.props.id){
      treeObj.name = name;
      treeObj.scientificName = scientificName;
      treeObj.treeImageUrl = treeImageURL;
      treeObj.seedImageUrl = seedImageURL;
      treeObj.shortDescription = description;
      localStorage.setItem("Tree_Object",JSON.stringify(treeObj))
      break;
    }
}
localStorage.setItem("Tree_Arr",JSON.stringify(treeArr));
console.log(treeArr)
alert("Successfully Updated")
this.props.onPageChange(LIST_PAGE_ID);
}

render(){
    const { name,scientificName,treeImage,seedImage,description,error } = this.state;
    return(
      <div>
        <h1>Edit</h1>
        <div className="validation-error" >
            {error}
        </div>
        <br />
        <input
            type="text"
            value={name}
            onChange = {(event)=>this.onNameChange(event)}
        />
        {" "}{this.state.message === "It's work. Please enter a new name" &&
                <div className="validation-error">
                    {error}
                </div>
                  }

        <br /><br />

        <input
            type="text"
            value={scientificName}
            onChange = {(event)=>this.onScientificNameChange(event)}
        />

        <br /><br />
        <input
            type="text"
            value={treeImageURL}
            onChange = {(event)=>this.onTreeImageChange(event)}
        />
        <br /> <br />
        <input
            type="text"
            value={seedImageURL}
            onChange = {(event)=>this.onSeedImageChange(event)}
        />
        <br /><br />
        <textarea
            type="text"
            value={description}
            onChange = {(event)=>this.onDescriptionChange(event)}
            rows = "15"
            cols = "80"
        />
        <br />  <br />
        <button  onClick={(event)=>this.onUpdateClick(event)}>Save</button>
        <br /><br />
        <br /><br />
        <button  onClick={(event)=>this.onBackClick(event)}>Back</button>
      </div>
    );
  }
}
