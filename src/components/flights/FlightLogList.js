import React from 'react'
import FlightLogSummary from './FlightLogSummary'

const FlightLogList = ({ flightLogs }) => {
  return (
    <div className="logbook-section">
      <table className="table logbook-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Route</th>
            <th scope="col">Aircraft</th>
            <th className="text-right" scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            flightLogs && flightLogs.map(flightLog => {
              return (
                <FlightLogSummary flightLog={ flightLog } key={ flightLog.id } />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default FlightLogList;