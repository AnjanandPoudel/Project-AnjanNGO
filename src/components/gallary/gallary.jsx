import React, {  } from 'react';
import { Component } from 'react';
/* import { Button, Col, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
 */import Addnew from '../common/addnew_button';
/* import Cardbox from '../common/cardbox';
 */import Gallarybox from './gallarybox';




class Gallary extends Component {
    constructor(){
        super()
        this.state={
            imageopen:false
        }
    }
   



    render(){

        return(
            <div className="container mt-5" >
                <div className="eventcardrow m-1row">
                    <div className="col-10">
                        <span className="t12 bold">These are our works</span>
                    </div>
                    <div className="col-3  col-md-2">
                        <Addnew />
                    </div>
                    <div className="row gallaryboxes col-10 col-md-12 " >
                        <Gallarybox />
                    </div>
                   
                   
    
                   
                </div>
    
                <div className="row">
                    <div className="row mt-5">
                            <span className="t12 mt-3 col-10">
                            Before corona pandamic
                            </span>
                            <div className="col-3 col-md-2 mt-3">
                                <Addnew />
                            </div>
                        </div>
                        <div className="row gallaryboxes col-10 col-md-12 " >
                        <Gallarybox />
                       
                       
                    </div>
                </div>
    
            </div>
        )
    }
   
}


export default Gallary;