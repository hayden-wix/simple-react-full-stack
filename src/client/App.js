import React, { Component } from 'react';
import './app.css';
import Patient from './FullPatient';

export default class App extends Component {
  state = {username: null};

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({username: user.username}));
  }

  render() {
    const {username} = this.state;
    const address1 = {
      line1: '128 Manor Road', city: 'Chigwell', region: 'Essex', zipCode: 'IG7 5PR', country: 'UK'
    };
    const patient1 = {
      firstName: 'Hayden',
      lastName: 'Marchant',
      dob: '1972-07-17',
      gender: 'M',
      phone: '0208-1234567',
      address: address1,
      insurance: {
        companyId: 'i00002',
        policyNo: '1234567890'
      },
      surgeries: [
        {
          date: '2019-01-01',
          speciality: 'Plastic',
          surgeon: {
            firstName: 'Bob',
            surname: 'Smith'
          },
          hospital: {
            id: 'h1234',
            name: 'Royal Free Hospital'
          }
        },
        {
          date: '2019-02-21',
          speciality: 'Liver transplant',
          surgeon: {
            firstName: 'Mike',
            surname: 'Lucky'
          },
          hospital: {
            id: 'h1234',
            name: 'Royal Free Hospital'
          }
        }
      ]

    };
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <Patient patient={patient1}>hello</Patient>
      </div>
    );
  }
}
