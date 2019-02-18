import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFlightLog } from '../../store/actions/flightLogActions'

class CreateFlightLog extends Component {

  state = {
    flightDate: '',
    flightAircraft: '',
    flightRoute: '',
    flightTakeoffDay: '',
    flightTakeoffNight: '',
    flightLandingDay: '',
    flightLandingNight: '',
    flightInstApp: '',
    flightNight: '',
    flightActual: '',
    flightSimInst: '',
    flightSim: '',
    flightHold: '',
    flightCrossCountry: '',
    flightDual: '',
    flightSolo: '',
    flightPIC: '',
    flightSIC: '',
    flightPICUS: '',
    flightInstruction: '',
    flightTotal: '',
    flightRemarks: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.createFlightLog(this.state)
  }

  render() {
    return (
      // Modal
      <div className="modal fade" id="create-flight-log" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
        <div className="modal-dialog create-flight-log bg-light" role="document">
          <div className="container">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5 className="modal-title" id="exampleModalLabel">Create Flight Log</h5>

                <form onSubmit={ this.handleSubmit } className="">
                  <div className="d-flex flex-wrap pt-1 justify-content-between flight-general">
                    <div className="form-group">
                      <label htmlFor="flight-date">Date</label>
                      <input onChange={ this.handleChange } type="text" className="form-control" id="flightDate" placeholder="Required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-aircraft">Aircraft</label>
                      <input onChange={ this.handleChange } type="text" className="form-control" id="flightAircraft" placeholder="Required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-route">Route</label>
                      <input onChange={ this.handleChange } type="text" className="form-control" id="flightRoute" placeholder="Required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-takeoff-day flight-takeoff-night">Takeoffs</label>
                      <div className="d-flex">
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightTakeoffDay" placeholder="Day" />
                        <p className="m-0 p-1">-</p>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightTakeoffNight" placeholder="Night" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-landing-day flight-takeoff-night">Landings</label>
                      <div className="d-flex">
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightLandingDay" placeholder="Day" />
                        <p className="m-0 p-1">-</p>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightLandingNight" placeholder="Night" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-inst-app">Inst. App.</label>
                      <input onChange={ this.handleChange } type="text" className="form-control" id="flightInstApp" placeholder="Required" />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="d-flex flex-wrap justify-content-between pt-1 flight-type">
                      <div className="form-group">
                        <label htmlFor="flight-night">Night</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightNight" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-actual">Actual</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightActual" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-sim-inst">Sim. Inst.</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightSimInst" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-flt-sim">Flt. Sim.</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightSim" placeholder="Required" />
                      </div><div className="form-group">
                        <label htmlFor="flight-holds">Inst. Hold</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightHold" placeholder="Required" />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between pt-1 flight-category">
                      <div className="form-group">
                        <label htmlFor="flight-cross-country">Cross Country</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightCrossCountry" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-dual">Dual</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightDual" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-solo">Solo</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightSolo" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-pic">PIC</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightPIC" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-sic">SIC</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightSIC" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-picus">PICUS</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightPICUS" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-instruction">Instruction</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightInstruction" placeholder="Required" />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between pt-1 flight-total">
                      <div className="form-group">
                        <label htmlFor="flight-total">Total Duration</label>
                        <input onChange={ this.handleChange } type="text" className="form-control" id="flightTotal" placeholder="Required" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group flight-remarks">
                    <label htmlFor="flight-pilot-remarks">Pilot Remarks</label>
                    <textarea onChange={ this.handleChange } type="text" className="form-control" id="flightRemarks" placeholder="Required"></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline-dark">Submit Flight Log</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFlightLog: (flightLog) => dispatch(createFlightLog(flightLog))
  }
}

export default connect(null, mapDispatchToProps)(CreateFlightLog)
