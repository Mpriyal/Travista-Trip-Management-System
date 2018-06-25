import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import HotelService from '../services/HotelService.js'
import HotelList from "./HotelList";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import HotelListAdmin from "./HotelListAdmin";


export default class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: []
        };
    }

    render() {
        return (
                <div className="container-fluid">
                    <div className="container p-5 m-5">
                        <div className="row">
                                <div className="col-sm-3" style={{marginBottom: 40}}>
                                    <div className="card align-content-center">
                                        <img className="card-img-top" src="https://logoobject.com/wp-content/uploads/edd/2017/09/Real-Estate-Logos-Inspiration.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Hotels</h5>
                                            <p>Add delete or update Hotels</p>
                                            <button class="btn btn-primary">
                                                <Link to='/hotelEditor' style={{color: "white"}}>
                                                    <div className="nav-link">Press</div>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{marginBottom: 40}}>
                                    <div className="card">
                                        <img className="card-img-top" src="https://cdn.onlinewebfonts.com/svg/img_56766.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Restaurants</h5>
                                            <p>Add, delete or update Restaurants</p>
                                            <button className="btn btn-primary">
                                                <Link to='/restaurantEditor' style={{color: "white"}}>
                                                    <div className="nav-link">Press</div>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{marginBottom: 40}}>
                                    <div className="card">
                                        <img className="card-img-top" src="https://image.flaticon.com/icons/svg/48/48670.svg" alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Car Providers</h5>
                                            <p>Add, delete or update Car Providers</p>
                                            <button className="btn btn-primary">
                                                <Link to='/carEditor' style={{color: "white"}}>
                                                    <div className="nav-link">Press</div>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3" style={{marginBottom: 40}}>
                                    <div className="card">
                                        <img className="card-img-top" src="http://locker.com.au/wp-content/uploads/2017/01/user-icon-png-person-user-profile-icon-20.png" alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Users</h5>
                                            <p>Add delete or update or Users</p>
                                            <button className="btn btn-primary">
                                                <Link to='/userEditor' style={{color: "white"}}>
                                                    <div className="nav-link">Press</div>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            <div>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}