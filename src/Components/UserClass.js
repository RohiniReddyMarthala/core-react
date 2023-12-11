import React from "react";

class UserClass extends React.Component{
    
   constructor(props){
    super(props);

    //console.log("child constructor")

    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
        }
    }
   }

   async componentDidMount(){
    //console.log("child component did mount");
    const data=await fetch(" https://api.github.com/users/rohinireddymarthala");
    const jsonD=await data.json();
    console.log(jsonD);

    this.setState({
        userInfo: jsonD,
    })
   }

   componentDidUpdate(){
    console.log("component did update")
   }
   
    render(){

      //  console.log("child render");
        const {name, location, bio, avatar_url} = this.state.userInfo;

        return(
        <div className='user-card'>
            <img className="dum" src={avatar_url}></img>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Bio : {bio}</h4>
        </div>
        )   
    }
}

export default UserClass;
