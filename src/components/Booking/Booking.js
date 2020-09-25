import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const Booking = (props) => {
    const { areaId } = useParams();
    const selectedArea = fakeData.find(area => area.id === areaId);
    console.log(selectedArea);

    // const history = useHistory();

    // const handleClick = () => {
    //     history.push{`/area/${id}`}
    // }
    const { name } = selectedArea;
    return (
        <div>
            <div className="container" >
                <div className="row" >
                    <div className="col-md-7">
                        <h1> {selectedArea.name} </h1>
                        <p> {selectedArea.description} </p>
                    </div>
                    <div className="col-md-5">
                        <form action="">
                            <p>Origin</p>
                            <input type="text" className="form-control" placeholder="Origin" required />
                            <br />
                            <p>Destination</p>
                            <input type="text" className="form-control" placeholder="Destination" required />
                            <br />

                            <div className="row">
                                <div className="col-md-6">
                                    <p>From</p>
                                    <input type="date" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <p>To</p>
                                    <input type="date" className="form-control" required />
                                </div>
                            </div>
                            <br />
                            <Link to={`/finalpage/${name}`}>
                                <button className="btn btn-primary">Start Booking</button>
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;