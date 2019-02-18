import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: '',
    remember: ''

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
      <div className="container-fluid home">
        
        {/* Hero */}
        <div className="hero">
          <div className="container">
            {/* <img src="images/shaun-darwood-587169-unsplash.jpg" /> */}
            <div className="row">

              {/* Header */}
              <div className="col-md-6 mt-auto mb-auto header-landing">
                <h1>Lima Bravo</h1>
                <p className="lead">
                  We make it easy to track your aviation experience. 
                  Use the link below and begin setting up your account...
                </p>
                <Link to="register">Register Now</Link>
              </div>

              {/* Sign In Form */}
              <div className="col-md-6 mt-auto mb-auto ml-auto sign-in-form">
                <div className="module">
                  <h2 className="text-right">
                    Your Logbook <br />
                    Online
                  </h2>
                  <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input onChange={ this.handleChange } type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input onChange={ this.handleChange } type="password" className="form-control" id="password" placeholder="Enter password" />
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input onChange={ this.handleChange } type="checkbox" className="custom-control-input" id="remember" />
                      <label className="custom-control-label" htmlFor="remember">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-block btn-outline-light mt-3">Login</button>
                  </form>
                </div>
              </div> 
            </div>
          </div>
        </div>

        {/* About */}
        <div className="about" id="about">
          <div className="container">
            <div className="row">

              {/* Header */}
              <div className="col-md-6 mt-auto mb-auto">
                <h2>About Lima Bravo</h2>
                <p>
                  LimaBravo was born from Link simply idea of how to keep track of Link pilots’ aviation experience at Link fair price. 
                  We know pilots are averse to completing paperwork, which is Link large part of Link commercial pilot, so our program takes your carefully entered data and helps you to tally up totals in as many different ways as the Aviation Authorities want.
                </p>
                <p>
                  Be sure to contact us if your Aviation Authority or your Company ask htmlFor Link specific metric. 
                  We will look at it and assess whether we can accomodate.
                </p>
                <p>
                    While you do much of the heavy lifting by entering all the relevant information, we add up the various totals when it matters. 
                    We will even tell you when you need to get back in the air and do Link few takeoffs and landings. Our program has the added benefit of making sure your totals are accurate. 
                    We know all too well how an early calculating error on page 1 of your “stone and chisel” logbook can cause havoc on your totals later on down the line.
                </p>
                <Link to="register">Register Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="pricing" id="pricing">
          <div className="container">
            <div className="row">

              {/* Header */}
              <div className="col-md-6 mt-auto mb-auto">
                <h2>Pricing</h2>
                <div className="d-flex align-items-center pricing-display">
                  <span className="currency align-self-start">$</span>
                  <span className="cost align-self-center">2</span>
                  <span className="occurance align-self-end">/mo</span>
                </div>
                <p>
                  Even though our aim is to offer Link premium service we think that this should only cost $2/month. 
                  Maintaining your information is important, but it shouldn't cost as much as your training. 
                  At this rate we know your next decision is Link no-brainer… we will see you inside.
                </p>
                <p>
                  Just so we are completely transparent we use the Stripe payment processing system. 
                  Our goal is preserving, maintaining, and displaying your flight experience so we leave all the banking to the professionals.
                </p>
                <Link to="register">Register Now</Link>
              </div> 
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="contact" id="contact">
          <div className="container">
            <div className="row">

              {/* Header */}
              <div className="col-md-6 mt-auto mb-auto">
                <h2>Contact</h2>
                <p>
                  We welcome any and all questions, comments, concerns, and feedback, so if you have any please get in touch with using the form below.
                </p>

                <form onSubmit={ this.handleSubmit } className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input onChange={ this.handleChange } type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Full name" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input onChange={ this.handleChange } type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input onChange={ this.handleChange } type="text" className="form-control" id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea onChange={ this.handleChange } type="text" className="form-control" id="message" placeholder="Message..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-block btn-outline-dark mt-3">Send</button>
                </form>
              </div> 
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Login;
