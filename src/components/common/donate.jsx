import React from "react"
import { Button } from "reactstrap";
import Social from "./social";

function Donate(){
    return(
        <div className="container mt-5 donatepart">
           <div className="row mt-5">
              <div className="col-12 col-md-6">
              <span className="t12 mt-3">
                   Want to donate us
               </span>
               <div className="donatebtn m-2 mt-3">
                   <Button className="btn btn-lg bold">Click here to donate us</Button>
               </div>
               <br />
               <div className="mt-5"></div>
               <span className="t2 "> Follow us on,</span>
                <Social />
              </div>

                <div className="imagedonate col-12 col-md-6">
                    <img src="/images/donate.jpg" alt="" />
                </div>
           </div>

        </div>
    )
}

export default Donate;