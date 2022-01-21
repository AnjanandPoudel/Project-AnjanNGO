import React, { Component } from 'react';
import Social from './social';

class Footer extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        return(
            <div className="home">
                 <Footersub />
            </div>
        )
    }
}



function Footersub(){
    return(
        <div className="footer mt-5 p-3" >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3 terms">
                        <a href="/">
                            Terms of services
                        </a>
                        <br />
                        <a href="/">
                            Privacy policy
                        </a>
                    </div>
                    <div className="col-3 ">
                       
                    </div>
                    <div className=" col-12 col-md-6 ">
                       <Social />
                    </div>
                </div>
                <div className="copyright col-12 mt-3">
                Copyright @ 2021: our ngo site.com.my
                </div>
            </div>
        </div>
    )
}



export default Footer;