export const createFlightLog = (flightLog) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // make async call
    const firestore = getFirestore()
    firestore.collection('flightLogs').add({
      ...flightLog,
      pilotId: '12345',
      updatedAt: new Date(),
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'CREATE_FLIGHT_LOG',
        flightLog: flightLog
      })
    }).catch((err) => {
      dispatch({
        type: 'CREATE_FLIGHT_LOG_ERROR',
        err: err
      });
    })
  }
}