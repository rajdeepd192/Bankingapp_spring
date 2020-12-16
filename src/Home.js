import test11 from './test11.jpg';
import React from 'react';



export default class HomeSc extends React.Component {
    constructor(props) {
        super(props);
    
}

render(){
    return(
        <div className="homescreen"><img src={test11} alt="test11" fluid width={1150} height={500}/>
        </div>
        
    )
}
}