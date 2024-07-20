import React from "react";
class Userclass extends React.Component{
       constructor(props){
        super(props);
        //making satte varible
          this.state={
             userinfo:{
              name:"defult",
              location:"defult loc",
              avatar_url:""
             }
          }
        // console.log("child constructors");
       }
     async  componentDidMount(){
        // console.log("child did mount is call");
        const data= await fetch("https://api.github.com/users/silentknight06");
        const json=await data.json();
          this.setState({
            userinfo:json,
          })
          // console.log("child comp.d.m call");
    }
      componentDidUpdate(){
        // console.log("child com.d.u call");
      }
     render(){
           
        const {name, location, avatar_url}=this.state.userinfo;
        return(
             
            <div className="user_card">
               {console.log("comp. render call")}
            <img src={avatar_url} className="img"/>
            <h1>name: {name}</h1>
            <h2>address: {location}</h2>
             <h1>team-name:loded_groupe</h1>
            </div>
        )
     }
}
export default Userclass;