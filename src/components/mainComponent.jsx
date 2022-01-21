import React,{Component} from 'react';
import {Route, Routes} from 'react-router-dom';


import Home from './home/aa_home';
import Header from './common/header';
import Footer from './common/footer';
import Event from './events/event';
import Gallary from './gallary/gallary';
import About from './aboutus/aboutus';
import Donate from './common/donate';
import OneEvent from './events/oneevent';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
      }
/*       
    onCourseClick(itemId){
      this.setState({selectedCourseId:itemId})
  }
 */
  
      render() {
        const Redirect=()=>{
          return(
           <div className="">
              <h1 className=" m50">
              Sorry, link not available
               
              </h1>
           </div>
          )
        }
       
      
       /*  const FooterPage=()=>{
          return(
            <div className="">
              
            </div>
          )
        } */
      
        return (
        
          <div className="">
            <Header />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/home" element={ <Home /> } />
              <Route path="/events" element={ <Event /> } />
              <Route path="/aboutus" element={ <About /> } />
              <Route path="/gallary" element={ <Gallary /> } />
              <Route path="/donate" element={ <Donate /> } />
              <Route path="/events/:eventid" element={ <OneEvent  /> } />
              <Route path="*" element={ <Redirect /> } />
            </Routes>
            <Footer />

          </div>
    
        );
      }
}

export default Main // connecting class Main and mapStatetoProps