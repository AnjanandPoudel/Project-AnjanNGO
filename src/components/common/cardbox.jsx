import React from "react";
import { Button } from "reactstrap";



function Cardbox(){
    const params='fdkjnsfkj'
    return(
       <div className="col-12 col-sm-6 col-md-4">
            <div className="cardbox ">
        <div className="cardimg">
            <img src="/images/e.jpg" alt="" />
        </div>
        <div className="cardinfo">
            <div className="cardtxtdescp">
                <div className="cardhead t3">
                    <span>Card head </span>
                </div>
                <div className="carddescp ">
                    <span>Card description is written here</span>
                </div>
            </div>
            <div className="">
                <a href={`/events/${params}`} > <Button >Go </Button></a>
            </div>
        </div>
   </div>
       </div>
    )
}

export default Cardbox;