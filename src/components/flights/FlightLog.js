import React from 'react';

const FlightLog = () => {
  return (
    <form className="">
      <fieldset disabled>
        <h5 className="modal-title" id="exampleModalLabel">Flight Log</h5>
        <div className="d-flex flex-wrap pt-1 justify-content-between flight-general">
          <div className="form-group">
            <label htmlFor="flight-date">Date</label>
            <input type="text" className="form-control" id="flightDate"  />
          </div>
          <div className="form-group">
            <label htmlFor="flight-aircraft">Aircraft</label>
            <input type="text" className="form-control" id="flightAircraft" placeholder="Required" />
          </div>
          <div className="form-group">
            <label htmlFor="flight-route">Route</label>
            <input type="text" className="form-control" id="flightRoute" placeholder="Required" />
          </div>
          <div className="form-group">
            <label htmlFor="flight-takeoff-day flight-takeoff-night">Takeoffs</label>
            <div className="d-flex">
              <input type="text" className="form-control" id="flightTakeoffDay" placeholder="Day" />
              <p className="m-0 p-1">-</p>
              <input type="text" className="form-control" id="flightTakeoffNight" placeholder="Night" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="flight-landing-day flight-takeoff-night">Landings</label>
            <div className="d-flex">
              <input type="text" className="form-control" id="flightLandingDay" placeholder="Day" />
              <p className="m-0 p-1">-</p>
              <input type="text" className="form-control" id="flightLandingNight" placeholder="Night" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="flight-inst-app">Inst. App.</label>
            <input type="text" className="form-control" id="flightInstApp" placeholder="Required" />
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-wrap justify-content-between pt-1 flight-type">
            <div className="form-group">
              <label htmlFor="flight-night">Night</label>
              <input type="text" className="form-control" id="flightNight" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-actual">Actual</label>
              <input type="text" className="form-control" id="flightActual" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-sim-inst">Sim. Inst.</label>
              <input type="text" className="form-control" id="flightSimInst" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-flt-sim">Flt. Sim.</label>
              <input type="text" className="form-control" id="flightSim" placeholder="Required" />
            </div><div className="form-group">
              <label htmlFor="flight-holds">Inst. Hold</label>
              <input type="text" className="form-control" id="flightHold" placeholder="Required" />
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between pt-1 flight-category">
            <div className="form-group">
              <label htmlFor="flight-cross-country">Cross Country</label>
              <input type="text" className="form-control" id="flightCrossCountry" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-dual">Dual</label>
              <input type="text" className="form-control" id="flightDual" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-solo">Solo</label>
              <input type="text" className="form-control" id="flightSolo" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-pic">PIC</label>
              <input type="text" className="form-control" id="flightPIC" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-sic">SIC</label>
              <input type="text" className="form-control" id="flightSIC" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-picus">PICUS</label>
              <input type="text" className="form-control" id="flightPICUS" placeholder="Required" />
            </div>
            <div className="form-group">
              <label htmlFor="flight-instruction">Instruction</label>
              <input type="text" className="form-control" id="flightInstruction" placeholder="Required" />
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between pt-1 flight-total">
            <div className="form-group">
              <label htmlFor="flight-total">Total Duration</label>
              <input type="text" className="form-control" id="flightTotal" placeholder="Required" />
            </div>
          </div>
        </div>
        <div className="form-group flight-remarks">
          <label htmlFor="flight-pilot-remarks">Pilot Remarks</label>
          <textarea type="text" className="form-control" id="flightRemarks" placeholder="Required"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark">Submit Flight Log</button>
      </fieldset>
    </form>
  )
}

export default FlightLog;

