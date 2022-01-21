import React from "react"

function Social(){
    return(
        <div className="">
            <div className="socialicons mt-3">
                <a  className=" socicon facebook" href="/"> 
                    <i   className="fa fa-facebook" ></i>
                </a>
                <a  className=" socicon youtube" href="/"> 
                    <i   className="fa fa-youtube"></i>
                </a>
                <a  className=" socicon twitter" href="/"> 
                    <i   className="fa fa-twitter"></i>
                </a>
                <a  className=" socicon google" href="/"> 
                    <i   className="fa fa-google"></i>
                </a>
                <a  className=" socicon instagram" href="#contactus"> 
                    <i   className="fa fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}

export default Social;