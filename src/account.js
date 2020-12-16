import React from 'react';
import axios from 'axios';

export default class AccForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer_name: null,
            account_type: null,
            opening_balance: null,
            address: null,
            contact_no: null
            
            
        }
    }

    customer_nameChangeHandler = (event) => {
        this.setState({customer_name: event.target.value});
      }

    accounttypeChangeHandler = (event) => {
        this.setState({account_type: event.target.value});
      }

    openingbalanceChangeHandler = (event) => {
        this.setState({opening_balance: event.target.value});
      }

    addressChangeHandler = (event) =>{
        this.setState({address: event.target.value});
    }

    contact_noChangeHandler = (event) =>{
        this.setState({contact_no: event.target.value})
    }


      submitHandler = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:8070/account/create', {
            customer_name: this.state.customer_name,
            account_type: this.state.account_type,
            opening_balance: this.state.opening_balance,
            address:  this.state.address,
            contact_no: this.state.contact_no
            
        })
        .then(response => alert("Succesful"));
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
              <h1>||Account Creation||</h1>
              <p>Enter Name:</p>
              <input
                type="text"
                onChange={this.customer_nameChangeHandler}
              />
              <p>Enter account type:</p>
              <input
                type="text"
                onChange={this.accounttypeChangeHandler}
              />
              <p>Enter opening balance:</p>
              
              < input type="text" 
              onChange= {this.openingbalanceChangeHandler}/>
                

              <p> Enter address: </p>
              <input type="text"
              onChange={this.addressChangeHandler}/>

              <p> Enter contact number: </p>
              <input
                type="text"
                onChange={this.contact_noChangeHandler}
               />
               
              <p>
              <input type='submit'/>
              </p>
            </form>
          );
    }

}