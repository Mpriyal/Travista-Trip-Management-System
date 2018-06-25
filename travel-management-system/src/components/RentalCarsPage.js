import React, {Component} from 'react'
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import RentalCarsService from '../services/RentalCarsService.js'
import CarsList from "./CarsList";
import {BrowserRouter as Router} from "react-router-dom";


export default class RentalCarsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '42.3398198',
            longitude: '-71.0875516',
            pickUp: moment('2018-07-01'),
            dropOff: moment('2018-07-11'),
            radius: '10',
            location: '',
            cars: []
        };
        this.locationChanged = this.locationChanged.bind(this);
        this.findAllCars = this.findAllCars.bind(this);
        this.findAllCarsByLatLong = this.findAllCarsByLatLong.bind(this);
        this.pickUpDateChange = this.pickUpDateChange.bind(this);
        this.dropOffDateChange = this.dropOffDateChange.bind(this);
        this.carService = RentalCarsService.instance;
    }

    locationChanged(event) {
        this.setState({
            location: event.target.value
        });
    }

    pickUpDateChange(event) {
        this.setState({
            pickUp : moment(event.target.value)
        });
    }

    dropOffDateChange(event) {
        this.setState({
            dropOff : moment(event.target.value)
        });
    }

    findAllCars(){
        this.carService
            .findLatLongOfLocation(this.state.location)
            .then((results) => {
                this.setLatLong(results); })
            .then(() => this.findAllCarsByLatLong());

    }

    setLatLong(results){
        this.setState({
            latitude:  results.results[0].geometry.location.lat,
            longitude: results.results[0].geometry.location.lng })
    }

    findAllCarsByLatLong() {
        this.carService
            .findAllCarsByLatLong(this.state.latitude,
                this.state.longitude,
                this.state.pickUp.format("YYYY-MM-DD"),
                this.state.dropOff.format("YYYY-MM-DD"),
                this.state.radius)
            .then((result) => {
                console.log(result);
                this.setState({
                    cars: result.results})
            });
    }


    render() {
        return (
            <Router>
                <div>
                    <div className="search align-content-center">
                        <form>
                            <div className="form-row align-content-center search">
                                <div className=" form-inline col">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Location</span>
                                    </div>
                                    <input className="form-control amber-border"
                                           type="text"
                                           placeholder="Location"
                                           onChange={this.locationChanged}
                                           aria-label="Search"
                                           ref="searchValue"/>
                                </div>
                                <div className="col form-inline">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Pick Up</span>
                                    </div>
                                    <input
                                        type= "date"
                                        className="form-control amber-border"
                                        onChange={this.pickUpDateChange}
                                    />
                                </div>
                                <div className="col form-inline">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Drop Off</span>
                                    </div>
                                    <input
                                        type="date"
                                        className="form-control amber-border"
                                        onChange={this.dropOffDateChange}
                                    />
                                </div>
                                <div className="col form-control-lg">
                                    <button className ="fa fa-search btn " aria-hidden="true"
                                            type="button"
                                            onClick={this.findAllCars}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <CarsList data={this.state.cars}/>
                    </div>
                </div>
            </Router>
        )
    }
}