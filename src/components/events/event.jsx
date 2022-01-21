import React, {  } from 'react';
/* import { Button, Col, Input, Label, Row } from 'reactstrap';
 */import Addnew from '../common/addnew_button';
import Cardbox from '../common/cardbox';


function Event(){
    return(
        <div className="container mt-5" >
            <div className="eventcardrow row m-1">
                <div className="col-10">
                    <span className="t12 bold">These are our works</span>
                </div>
                <div className="col-3  col-md-2">
                    <Addnew />
                </div>
                <Cardbox  />
                <Cardbox />
                <Cardbox />  
                <Cardbox />
                <Cardbox />

               
            </div>

            <div className="row">
                <div className="row mt-5">
                        <span className="t12 mt-3 col-9">
                        Before corona pandamic
                        </span>
                        <div className="col-3  col-md-2 mt-3">
                            <Addnew />
                        </div>
                    </div>
                    <Cardbox  />
                    <Cardbox />
                    <Cardbox />
            </div>

        </div>
    )
}


export default Event;