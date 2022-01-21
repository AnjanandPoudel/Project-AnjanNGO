
import React from "react"

function Secondarymain(props){
    return(
        <div className="container secondarymain ">
           <div className="row p-3">
           <div className="col-md-6">
            <span className="whytodonate t1">
                Why to donate ?
                </span>
                <br />
                <span className="whydonatetxt t4">
                    <span className="whydonatetitle">
                    {props.item.whytodonatetexttitle}
                    </span>
                        <br />
                        <br />
                    <div className="whydonatedescp">
                        {props.item.whytodonatetext}
                    </div>
                </span>
           </div>
           <div className="col-md-1"></div>
           <div className="photo col-md-5">
               <img className="img-thumbnail" height="400" src={props.item.whytodonateimage} alt="" />
           </div>

           </div>
        </div>
    )
}

export default Secondarymain;