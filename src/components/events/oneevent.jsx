import React, {  } from 'react';
/* import { Button, Col, Input, Label, Row } from 'reactstrap';
import Addnew from '../common/addnew_button';
import Cardbox from '../common/cardbox'; */
import Gallarybox from '../gallary/gallarybox';


function OneEvent(){
    return(
        <div className="container-fluid  mt-5" >
            <div className="individualevent offset-1 row">
                <div className="oneeventimage col-12 col-md-9 ">
                    <img src="/images/d.jpg" alt="" className="rounded" />
                </div>
                <div className="m-5 col-12 col-md-9">
                    <div className="t3 ">
                        Event name will be written here
                    </div>
                    <div className="t4 m-2">
                        <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quasi. Deleniti, at debitis tempora iste repellat consequuntur aliquid similique nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum nulla dolorum nobis illo placeat, earum asperiores aliquam ad. Doloremque labore iure quos dolorem enim quidem dolores ipsa id hic?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repudiandae non est, aliquam laborum recusandae tempora neque magni sapiente quos inventore nemo tenetur aut, asperiores, iure nisi vero deleniti. Rem, nostrum mollitia nemo reprehenderit, ducimus saepe officia, dolor repellat sequi omnis assumenda fuga facilis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, corrupti nobis. Minus tenetur doloribus mollitia laborum, delectus sit esse aliquid.
                        </span> <br />

                            <br />
                       
                    </div>
                    
                </div>
                <div className="mt-5 t12">
                                Images at the event :
                            </div>
                        <div className="mt-2 oneeventotherimages d-flex flex-wrap">
                           

                            <Gallarybox />
                            <Gallarybox />
                            <Gallarybox />

                            <Gallarybox />
                            <Gallarybox />
                            <Gallarybox />

                        </div>
            </div>
        </div>
    )
}


export default OneEvent;