import React, { Component } from 'react';
import Seat from './Seat'
import './App.css';

class Row extends Component {

    constructor(props) {
        super(props)
        this.state = {
            row: this.addAisle(this.props.row)
        }
    }

    addAisle(row) {
        for (let i = 0; i < row.length; i++ ) {
            if ( !row[i] ) {
                row[i] = {seat: "aisle" + i,
                    aisle: true}
            }
        }
        return row
    }

    render() {
        return (
            <div className='row'>
                <div className="row-number">{this.state.row[0].row}</div>
                { this.state.row.map( seat => {
                    return (
                        <Seat selectedSeat={this.props.selectedSeat}
                            selectSeat={this.props.selectSeat}
                            seat={seat}
                            key={seat.row + seat.seat} />
                    )
                }
                ) }
            </div>
        )
    }
}

export default Row;
