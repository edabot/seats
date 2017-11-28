import React, { Component } from 'react';
import './App.css'

class Seat extends Component {

    selectSeat() {
        this.props.selectSeat(this.props.seat.row, this.props.seat.seat)
    }

    displaySeat(seat) {
        if ( seat.aisle) {
            return(
                <div className="aisle"></div>
            )
        }
        let style = "seat"

        if (seat.occupied){
            style += ' occupied'
        }

        if (seat.row === this.props.selectedSeat.row && seat.seat === this.props.selectedSeat.seat ) {
            style += ' selected'
        }

        return (
            <div className={style} onClick={this.selectSeat.bind(this)}>{`${seat.row}${seat.seat}`}</div>
        )
    }

    render() {
        return (
            <div>{this.displaySeat(this.props.seat)}</div>
        )
    }
}

export default Seat;
