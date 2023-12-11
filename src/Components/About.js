import {Component} from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
       // console.log("parent constructor")
    }

    componentDidMount(){
        //console.log("parent component did mount")
    }

    render(){
        //console.log("parent render")
        return(
            <div>
            <h1>About Us</h1>
            <h2>This is the main page about us</h2>
            {/* <User fname="Rohini Reddy" location="Hyderabad"/> */}
            <UserClass fname="Revanth Reddy" location= "Bangalore" />
        </div>
        )
    }
}

export default About;