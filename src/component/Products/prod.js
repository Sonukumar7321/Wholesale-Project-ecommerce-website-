import React from 'react'
import './prod.css'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import almond from '../Assets/almond.jpg';
import walnut from '../Assets/walnut.jpg';
import kismis from '../Assets/kismis.jpg';
import date  from '../Assets/Dates.jpg'
import cashew from '../Assets/cashew.jpg'
import dryfig from '../Assets/dryfig.jpg'
import peanuts from '../Assets/peanuts.jpeg'
import coconut from '../Assets/drycoconut.jpeg'
import drydates from '../Assets/drydates.jpeg'
import lotuseedpop from '../Assets/lotuseedpop.jpeg'
import hazelnut from '../Assets/hazelnut.jpeg'
import prunes from '../Assets/prunes.jpeg'
import drygoji from '../Assets/drygoji.jpeg'
import soyanuts from '../Assets/soyanuts.jpeg'
import cranberry from '../Assets/cranberry.jpg'




export default function Prod(){
    const navigate = useNavigate();

    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">
                    <div className="prod-img">
                        <img src={almond} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>American (California) Badam jumbo Size
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />849/. per kg</h4></div>
                        <button onClick={()=>prodName('American (California) Badam jumbo Size')} className="order-button">order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Prod1(){
    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders/',{state:{Pname}});
      }
    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={walnut} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Walnut Inshell Chile paper shell kagzi
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <button onClick={()=>prodName('Walnut Inshell Chile paper shell kagzi')} className="order-button">order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Prod2(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }


    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={kismis} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Afghani Small Green Raisins Kismish
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />480/. per kg</h4></div>
                        <button onClick={()=>prodName('Afghani Small Green Raisins Kismish')} className="order-button">order now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Prod3(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={date} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Mejdoul saudi Dates Big Size medjool khajoor
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />320/. per kg</h4></div>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>          
                      </div>
                </div>
            </div>
        </div>
    )
}
export function Prod4(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={dryfig} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias eveniet perspiciatis ducimus. Nulla autem veniam in molestias optio qui a, impedit, consequuntur nemo, exercitationem animi praesentium corporis at nobis.",
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <h4 className='prod-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam odio id repudiandae voluptatibus. Facilis expedita est velit repellat optio sint ex eaque rem nemo quidem libero deleniti, ea nesciunt.</h4>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>               
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Prod5(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={lotuseedpop} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias eveniet perspiciatis ducimus. Nulla autem veniam in molestias optio qui a, impedit, consequuntur nemo, exercitationem animi praesentium corporis at nobis.",
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <h4 className='prod-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam odio id repudiandae voluptatibus. Facilis expedita est velit repellat optio sint ex eaque rem nemo quidem libero deleniti, ea nesciunt.</h4>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Prod6(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={peanuts} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias eveniet perspiciatis ducimus. Nulla autem veniam in molestias optio qui a, impedit, consequuntur nemo, exercitationem animi praesentium corporis at nobis.",
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <h4 className='prod-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam odio id repudiandae voluptatibus. Facilis expedita est velit repellat optio sint ex eaque rem nemo quidem libero deleniti, ea nesciunt.</h4>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Prod7(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={coconut} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias eveniet perspiciatis ducimus. Nulla autem veniam in molestias optio qui a, impedit, consequuntur nemo, exercitationem animi praesentium corporis at nobis.",
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <h4 className='prod-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam odio id repudiandae voluptatibus. Facilis expedita est velit repellat optio sint ex eaque rem nemo quidem libero deleniti, ea nesciunt.</h4>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>               
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Prod8(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={cashew} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias eveniet perspiciatis ducimus. Nulla autem veniam in molestias optio qui a, impedit, consequuntur nemo, exercitationem animi praesentium corporis at nobis.",
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <h4 className='prod-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam odio id repudiandae voluptatibus. Facilis expedita est velit repellat optio sint ex eaque rem nemo quidem libero deleniti, ea nesciunt.</h4>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>               
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Prod9(){

    const navigate = useNavigate();
    const prodName=(Pname)=>{
        navigate('/Orders1/',{state:{Pname}});
      }

    return (
        <div className="select">
            <div className="prod-div">
                <div className="container">

                    <div className="prod-img">
                        <img src={drydates} alt="KAJU" />
                    </div>

                    <div className="prod-details">
                        <div className='prod-type'>
                            <h3>Dry Fruits</h3><hr />
                            <h3 className='prod-name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias eveniet perspiciatis ducimus. Nulla autem veniam in molestias optio qui a, impedit, consequuntur nemo, exercitationem animi praesentium corporis at nobis.",
                            </h3>
                        </div>
                        <div className="prod-price"><h4><FaRupeeSign />790/. per kg</h4></div>
                        <h4 className='prod-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat totam odio id repudiandae voluptatibus. Facilis expedita est velit repellat optio sint ex eaque rem nemo quidem libero deleniti, ea nesciunt.</h4>
                        <button onClick={()=>prodName('Mejdoul saudi Dates Big Size medjool khajoor')} className="order-button">order now</button>               
                    </div>
                </div>
            </div>
        </div>
    )
}


