import React, {  } from 'react';
/* import Addnew from '../common/addnew_button';
import Cardbox from '../common/cardbox'; */
import { /* Button, Col, Input, Label, */ Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Component } from 'react';
import { Context } from '../../context/gallarycontext'


class Gallarybox extends Component{
    static contextType=Context

    constructor(){
        super()
        this.state={
            imageopen:false
        }
    }

    componentWillMount(){
        const state=this.context.gallarystate
        console.log(state)
    }
    
    handleimageopen=(item)=>{
        this.setState({
            imageopen:!this.state.imageopen,
            name:item.name,
            description:item.description,
            image:item.image
        })       
    }
    render(){
        const item=this.context.gallarystate
        console.log(item)

        let totalgallarybox=item.map((item)=>{
            console.log(item)

            return(
                <div className="gallarybox col-12 col-sm-6 col-md-3 " onClick={()=> this.handleimageopen(item)} key={item._id} >
                    <div className="cardimg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="cardinfo">
                        <div className="cardtxtdescp">
                            <div className="carddescp t5 ">
                                <span > {item.description} </span>
                            </div>
                        </div>
                        
                    </div>
                    
                    
            
            
                 
        
            </div>
            )
        })

        return(
            <div className="d-flex flex-wrap">
                {totalgallarybox}
                <Modal className="mymodal modal-lg" toggle={this.handleimageopen} isOpen={this.state.imageopen}>
                        <ModalHeader toggle={this.handleimageopen}>
                        <span className="black" > {this.state.name}</span>
                        </ModalHeader>
                        <ModalBody >
                                <img src={this.state.image} alt="" />
                                <hr />
                                <span className="black" > {this.state.description}</span>
                        </ModalBody>
                    </Modal>
            </div>
           
         )

    }
    
 }

export default Gallarybox;