import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FlightLogList from '../flights/FlightLogList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Logbook extends Component {
  render() {

    // console.log(this.props)
    const { flightLogs } = this.props

    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">

          {/* Sidebar */}

          <div className="col-md-4 sidebar">
            {/* Header */}
            <div className="mb-3">
              <h2>NOTAMs</h2>
            </div>

            {/* Recent Totals */}
            <div className="recent-totals">
              <small className="mb-3">Recent <span>Last 90 days</span></small>
              <div className="totals">
                <div className="d-flex justify-content-between mb-1">
                  <p className="m-0">Flight Time</p>
                  <p className="m-0">100.0</p>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <small>Night</small>
                  <small>100.0</small>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <p className="m-0">Takeoffs</p>
                  <p className="m-0">100</p>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <small>Night</small>
                  <small>100</small>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <p className="m-0">Landings</p>
                  <p className="m-0">100</p>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <small>Night</small>
                  <small>100</small>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <p className="m-0">Instrument <small>Sim</small></p>
                  <p className="m-0">100.0</p>
                </div>
                <div className="d-flex justify-content-between">
                  <small>Actual</small>
                  <small>100.0</small>
                </div>
              </div>
            </div>
              
            {/* Display Expired Licenses */}
            <div className="license-list">
              <small className="mb-3">Expired Licenses</small>
              <div className="license logbook-license-display danger-bg">
                <div className="d-flex justify-content-between">
                  <p className="number">2630001234</p>
                  <p className="naa">CAAZ</p>
                </div>
                <small className="expiration-number">Expired: 21 December 2019</small>
              </div>
              <div className="license logbook-license-display danger-bg">
                <div className="d-flex justify-content-between">
                  <p className="number">2630001234</p>
                  <p className="naa">CAAZ</p>
                </div>
                <small className="expiration-number">Expired: 21 December 2019</small>
              </div>
            </div>

            {/* Display Licenses About to Expire */}
            <div className="license-list">
              <small className="mb-3">Upcoming Expirations</small>
              <div className="license logbook-license-display warning-bg">
                <div className="d-flex justify-content-between">
                  <p className="number">2630001234</p>
                  <p className="naa">CAAZ</p>
                </div>
                <small className="expiration-number">Expires: 21 December 2019</small>
              </div>
              <div className="license logbook-license-display warning-bg">
                <div className="d-flex justify-content-between">
                  <p className="number">2630001234</p>
                  <p className="naa">CAAZ</p>
                </div>
                <small className="expiration-number">Expires: 21 December 2019</small>
              </div>
            </div>

          </div> {/* end .sidebar */}

          <div className="col-md-8 logbook">
            {/* Header */}
            <div className="mb-3">
              <div className="d-flex page-btns">
                <Link to="#" className="mr-3"><i className="fas fa-chevron-left"></i></Link>
                <Link to="#"><i className="fas fa-chevron-right"></i></Link>
              </div>
              <h2>Logbook</h2>
            </div>

            <div>
              <span className="page-number"><small>Page 2 of 20</small></span>
              <small className="mb-3">Flight Experience</small>
            </div>

            <FlightLogList flightLogs={ flightLogs } />
              
            </div>
          </div> {/* end .logbook */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    flightLogs: state.firestore.ordered.flightLogs
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'flightLogs' }
  ])
)(Logbook);