import React, { Component } from 'react'

class Register extends Component {
  state = {
    first: '',
    last: '',
    email: '',
    mobile: '',
    street: '',
    city: '',
    country: '',
    username: '',
    password: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      // Registration
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 registration">
              {/* Header */}
              <div className="">
                <h2>Registration - Step 1</h2>
                <p className="lead">
                  User Information
                </p>
              </div>

              {/* Registration Form Step 1 */}
              <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                  <label htmlFor="first">First Name</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="first" placeholder="Enter username" />
                </div>
                <div className="form-group">
                  <label htmlFor="last">Last Name</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="last" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={ this.handleChange } type="email" className="form-control" id="email" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="mobile" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="street">Street Address</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="street" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="city" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="country" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input onChange={ this.handleChange } type="text" className="form-control" id="username" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input onChange={ this.handleChange } type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label htmlFor="password-check">Password Check</label>
                  <input type="password" className="form-control" id="password-check" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-block btn-outline-dark mt-3">Next Step</button>
                <small>Next Step - payment information</small>
              </form>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default Register
