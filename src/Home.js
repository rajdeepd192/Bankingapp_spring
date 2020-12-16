import test11 from './test14.png';
import React from 'react';



export default class HomeSc extends React.Component {
    constructor(props) {
        super(props);
    
}

render(){
    return(
        <div className="homescreen"><img src={test11} alt="test14" fluid width={1150} height={500}/>
        </div>
        
    )
}
}