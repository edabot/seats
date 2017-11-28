import React, { Component } from 'react';
import './App.css'
import Row from './Row'
import rawSeats from './seats'

function orderSeats(seats) {
    let rows = []
    for (let i = 0; i < seats.length; i++) {
        let row = seats[i].row,
            seat = seats[i].seat.charCodeAt(0) - 65
        if ( !rows[row] ) {
            rows[row] = []
        }
        rows[row][seat] = seats[i]
    }
    return rows
}

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rows: orderSeats(rawSeats),
            classes: [],
            selectedSeat: {
                row: 0,
                seat: '1'
            }
        }
    }

    selectSeat(newRow, newSeat) {
        let newSeatNumber = newSeat.charCodeAt(0) - 65
        if ( !this.state.rows[newRow][newSeatNumber].occupied )
        this.setState({selectedSeat: {row: newRow, seat: newSeat}})
    }

  render() {
    return (
      <div className="App">
          { this.state.rows.map( row => {
              return (
                  <Row row={row}
                      selectedSeat={this.state.selectedSeat}
                      selectSeat={this.selectSeat.bind(this)}
                      key={row[0].row}/>
              )
            }
        )}
      </div>
    );
  }
}

export default App;
