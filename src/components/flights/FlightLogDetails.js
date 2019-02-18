import React from 'react';

const FlightLogDetails = ({ flightLog }) => {
  return (
    // Modal
    <div className="modal fade" id="flight-log-details" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
      <div className="modal-dialog create-flight-log bg-light" role="document">
        <div className="container">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h5 className="modal-title" id="exampleModalLabel">Flight Log Details</h5>

              <form className="">
                <fieldset disabled>                
                  <div className="d-flex flex-wrap pt-1 justify-content-between flight-general">
                    <div className="form-group">
                      <label htmlFor="flight-date">Date</label>
                      <input type="text" className="form-control" id="flight-date" placeholder="Required" defaultValue={ flightLog.flightDate } />
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-aircraft">Aircraft</label>
                      <input type="text" className="form-control" id="flight-aircraft" placeholder="Required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-route">Route</label>
                      <input type="text" className="form-control" id="flight-route" placeholder="Required" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-takeoff-day flight-takeoff-night">Takeoffs</label>
                      <div className="d-flex">
                        <input type="text" className="form-control" id="flight-takeoff-day" placeholder="Day" />
                        <p className="m-0 p-1">-</p>
                        <input type="text" className="form-control" id="flight-takeoff-night" placeholder="Night" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-landing-day flight-takeoff-night">Landings</label>
                      <div className="d-flex">
                        <input type="text" className="form-control" id="flight-landing-day" placeholder="Day" />
                        <p className="m-0 p-1">-</p>
                        <input type="text" className="form-control" id="flight-landing-night" placeholder="Night" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="flight-inst-app">Inst. App.</label>
                      <input type="text" className="form-control" id="flight-inst-app" placeholder="Required" />
                    </div>
                  </div>

                  <div className="d-flex">
                    <div className="d-flex flex-wrap justify-content-between pt-1 flight-type">
                      <div className="form-group">
                        <label htmlFor="flight-night">Night</label>
                        <input type="text" className="form-control" id="flight-night" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-actual">Actual</label>
                        <input type="text" className="form-control" id="flight-actual" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-sim-inst">Sim. Inst.</label>
                        <input type="text" className="form-control" id="flight-sim-inst" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-flt-sim">Flt. Sim.</label>
                        <input type="text" className="form-control" id="flight-flt-sim" placeholder="Required" />
                      </div><div className="form-group">
                        <label htmlFor="flight-holds">Inst. Hold</label>
                        <input type="text" className="form-control" id="flight-hold" placeholder="Required" />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between pt-1 flight-category">
                      <div className="form-group">
                        <label htmlFor="flight-cross-country">Cross Country</label>
                        <input type="text" className="form-control" id="flight-cross-country" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-dual">Dual</label>
                        <input type="text" className="form-control" id="flight-dual" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-solo">Solo</label>
                        <input type="text" className="form-control" id="flight-solo" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-pic">PIC</label>
                        <input type="text" className="form-control" id="flight-pic" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-sic">SIC</label>
                        <input type="text" className="form-control" id="flight-sic" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-picus">PICUS</label>
                        <input type="text" className="form-control" id="flight-picus" placeholder="Required" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="flight-instruction">Instruction</label>
                        <input type="text" className="form-control" id="flight-instruction" placeholder="Required" />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between pt-1 flight-total">
                      <div className="form-group">
                        <label htmlFor="flight-total">Total Duration</label>
                        <input type="text" className="form-control" id="flight-total" placeholder="Required" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group flight-remarks">
                    <label htmlFor="flight-pilot-remarks">Pilot Remarks</label>
                    <textarea type="text" className="form-control" id="flight-pilot-remarks" placeholder="Required"></textarea>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightLogDetails;
