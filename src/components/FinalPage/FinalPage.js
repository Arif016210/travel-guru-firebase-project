import React from 'react';
import { useParams } from 'react-router-dom';
import travelInfo from '../../fakeData/travel';

const FinalPage = (props) => {


    const { areaId } = useParams();
    const filter = travelInfo.find(area => area.name === areaId);
    console.log(filter);
    return (
        <div  >

            {
                filter.hotels.map(hotel => {
                    return (
                        <div className="row" >

                            <div className="col-md-7" >
                                <div className="row">
                                    <div className="col-md-5" >
                                        <img style={{ width: "260px", height: "300px" }} src={hotel.img} alt="" />
                                    </div>

                                    <div className="col-md-7" >
                                        <h2> {hotel.hotel} </h2>
                                        <p> Info:  {hotel.hotelInfo} </p>
                                        <p>Rate {hotel.rate} </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5" >
                                <iframe style={{ width: "350px", height: "300px" }} src={hotel.map} frameborder="0"></iframe>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default FinalPage;