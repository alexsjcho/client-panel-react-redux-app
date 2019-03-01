import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "123456",
        firstName: "Kelly",
        lastName: "Kiss",
        email: "kk@gmail.com",
        phone: "111-111-1111",
        balance: "600.50"
      },
      {
        id: "654321",
        firstName: "Bob",
        lastName: "Baam",
        email: "bb@gmail.com",
        phone: "222-222-2222",
        balance: "340.33"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-users">Clients</i>
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(clients => (
                <tr key={clients.id}>
                  <td>
                    {clients.firstName} {clients.lastName}
                  </td>
                  <td>{clients.email}</td>
                  <td>${parseFloat(clients.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${clients.id}`}
                      className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right">Details</i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Clients</h1>
        </div>
      );
    }
  }
}

export default Clients;
