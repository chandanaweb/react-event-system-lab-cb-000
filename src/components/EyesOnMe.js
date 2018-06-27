// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{
  fevent = () => {
    console.log('Entering password...');
  }
  render(){
    return(
      <input type="password" keyUp={this.pwd}/>
    )
  }
}

export default EyesOnMe;