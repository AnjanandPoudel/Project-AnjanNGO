import React, { Component } from 'react';
import { Button} from 'reactstrap';
import Social from '../common/social';
import Cardbox from '../common/cardbox';
import Contact from './c_contact';
import Secondarymain from './b_seconmain';
import Addnew from '../common/addnew_button';
import { Context } from '../../context/gallarycontext';


class Home extends Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        let item=this.context.homestate

        return(
            <div className="home">
                <Main item={item} />
                <Secondarymain item={item} />
                <Services />
                <Help />
                <Contact />
               
                
            </div>
        )
    }
}

function Main(props){
    return(
        <div className="">
            <div className="backgroundpic">
                <img src={props.item.backgroundimage} alt='pic' />
            </div>
          <div className="mainandbtn d-flex flex-wrap">
          <div className="mainpart">
            <div className="mainhead t1 col-12">
                {props.item.motto}
                </div>
                <div className="maintext t3">
                    {props.item.mottodescription}
                </div>
           </div>

               <a href="/donate" className="white">  <Button className="mainbtn">  Support us </Button></a> 
          </div>
        </div>
    )
}




function Services(){
    return(
        <div className="services container pt-5 mt-5">
           <div className="whatwedo t12 ">
           What we do ...
           </div>
           <div className="row">
                <div className=" col-12 col-md-10 d-flex flex-wrap ">
                    <Cardbox />
                    <Cardbox />
                    <Cardbox />
                </div>

                <div className=" seeandadd col-12 col-sm-4 col-md-2 mt-5 pt-5 ">
                    <a href="/events" className="white"><Button className="p-2 m-2 col-10  " > Seemore </Button></a> 
                    <Addnew />
                </div>
           </div>

        </div>
    )
}



function Help(){
    return(
        <div className="help mt-5 m-1">
            <div className="container">
                <div className="helpus t12">
                    How can you help us?
                </div>
                <div className="socialmedia t2">
                    <ul>
                        <li>Share on social media</li>
                        <Social />
                    </ul>
                    
                </div>
                <div className="donate t2">
                    <ul>
                        <li>Donate us !</li>
                    </ul>
                        <a href="/donate" className="white"> <Button className="btn btn-lg  t2 col-12 col-md-6 ">Click here to change lives</Button></a> 
                </div>
            </div>
        </div>
    )
}


export default Home;