const initState = {
  flightLogs: [
    {id: '1', flightDate: '2019/02/01', flightAircraft: 'Z-WSG', flightRoute: 'FVRG-FVFA', flightTakeoffDay: '1', flightTakeoffNight: '', flightLandingDay: '1', flightLandingNight: '', flightInstApp: '1', flightNight: '', flightActual: '1.1', flightSimInst: '', flightSim: '', flightHold: '1', flightCrossCountry: '2.5', flightDual: '', flightSolo: '', flightPIC: '2.5', flightSIC: '', flightPICUS: '', flightInstruction: '', flightTotal: '2.5', flightRemarks: 'Commercial flight HRE to VFA. Hold over XXX and ILS app.'},
    {id: '2', flightDate: '2019/02/02', flightAircraft: 'ZS-MBZ', flightRoute: 'FVRG-FALA', flightTakeoffDay: '', flightTakeoffNight: '1', flightLandingDay: '', flightLandingNight: '1', flightInstApp: '', flightNight: '3.5', flightActual: '', flightSimInst: '', flightSim: '', flightHold: '1', flightCrossCountry: '3.5', flightDual: '', flightSolo: '', flightPIC: '', flightSIC: '3.5', flightPICUS: '', flightInstruction: '', flightTotal: '3.5', flightRemarks: 'Commercial flight HRE to Lanseria.'},
    {id: '3', flightDate: '2019/02/03', flightAircraft: 'Z-HAC', flightRoute: 'FVRG-FACT', flightTakeoffDay: '1', flightTakeoffNight: '', flightLandingDay: '', flightLandingNight: '1', flightInstApp: '1', flightNight: '1.2', flightActual: '3.4', flightSimInst: '', flightSim: '', flightHold: '', flightCrossCountry: '6.5', flightDual: '', flightSolo: '', flightPIC: '', flightSIC: '6.5', flightPICUS: '', flightInstruction: '', flightTotal: '6.5', flightRemarks: 'Commercial flight HRE to Cape Town.'},
  ]
}

const flightLogReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_FLIGHT_LOG':
      console.log('flight log created', action.flightLog)
      return state;
    case 'CREATE_FLIGHT_LOG_ERROR':
      console.log('create flight log error', action.err)
      return state;
    case 'UPDATE_FLIGHT_LOG':
      console.log('flight log updated', action.flightLog)
      return state;
    case 'UPDATE_FLIGHT_LOG_ERROR':
      console.log('update flight log error', action.err)
      return state;
    case 'DELETE_FLIGHT_LOG':
      console.log('flight log updated', action.flightLog)
      return state;
    case 'DELETE_FLIGHT_LOG_ERROR':
      console.log('delete flight log error', action.err)
      return state;
    default:
      return state;
  }
}

export default flightLogReducer
