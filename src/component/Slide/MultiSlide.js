import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import almond from '../Assets/almond.jpg'
import walnut from '../Assets/walnut.jpg'
import cashew from '../Assets/cashew.jpg'
import kismis from '../Assets/kismis.jpg'
import dryfig from '../Assets/dryfig.jpg'
import date from '../Assets/Dates.jpg'
import peanuts from '../Assets/peanuts.jpeg'
import coconut from '../Assets/drycoconut.jpeg'
import drydates from '../Assets/drydates.jpeg'
import lotuseedpop from '../Assets/lotuseedpop.jpeg'
import hazelnut from '../Assets/hazelnut.jpeg'
import prunes from '../Assets/prunes.jpeg'
import drygoji from '../Assets/drygoji.jpeg'
import soyanuts from '../Assets/soyanuts.jpeg'
import cranberry from '../Assets/cranberry.jpg'
import { FaRupeeSign } from "react-icons/fa";
import './MultiSlide.css';
import { Link } from 'react-router-dom';

export default function MultiSlide() {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    }
    return (
        <>
            <div className="prod-slide">
                <div className="div-prod-head">
                    <h3 className='prod-head'>WholeSale Dry Fruits</h3>
                </div>
                <Carousel responsive={responsive}>
                    <div className="card"  >
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={almond} alt="Almond" />
                            <h5 className='prod-desc'>American (California) Badam jumbo Size</h5>
                            <span className='prod-rate'><FaRupeeSign />849/. per kg</span>
                        </Link>

                    </div>
                    <div className="card" >
                        <Link to="/Product/ProductView1">
                            <img className='image-style' src={walnut} alt="Almond" />
                            <h5 className='prod-desc'>Walnut Inshell Chile paper shell kagzi</h5>
                            <span className='prod-rate'><FaRupeeSign />1250/. per kg</span>
                        </Link>



                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView2">
                            <img className='image-style' src={kismis} alt="Almond" />
                            <h5 className='prod-desc'>Afghani Small Green Raisins Kismish</h5>
                            <span className='prod-rate'><FaRupeeSign />480/. per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView3">
                            <img className='image-style' src={date} alt="Almond" />
                            <h5 className='prod-desc'>Mejdoul saudi Dates Big Size medjool khajoor</h5>
                            <span className='prod-rate'><FaRupeeSign />320/. per kg</span>
                        </Link>

                    </div>
                    <div className='card'>
                        <Link to="/Product/ProductView4">
                            <img className='image-style' src={dryfig} alt="Almond" />
                            <h5 className='prod-desc'>Anjeer Jumbo Dried Figs Fresh stock</h5>
                            <span className='prod-rate'><FaRupeeSign />542/. per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView5">
                            <img className='image-style' src={lotuseedpop} alt="Almond" />
                            <h5 className='prod-desc'>Classic Harvest Regular Lotus Seed Pop</h5>
                            <span className='prod-rate'><FaRupeeSign />1200 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView6">
                            <img className='image-style' src={peanuts} alt="Almond" />
                            <h5 className='prod-desc'>PNC Quality Bazar Premium Whole Groundnut</h5>
                            <span className='prod-rate'><FaRupeeSign />120 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView7">
                            <img className='image-style' src={coconut} alt="Almond" />
                            <h5 className='prod-desc'>khopra copra Dry coconut halves</h5>
                            <span className='prod-rate'><FaRupeeSign />250 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView8">
                            <img className='image-style' src={cashew} alt="Almond" />
                            <h5 className='prod-desc'>Good Life W240 Cashew Shelled</h5>
                            <span className='prod-rate'><FaRupeeSign />1060/. per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView9">
                            <img className='image-style' src={drydates} alt="Almond" />
                            <h5 className='prod-desc'>Jd Nuts Premium yello Dry Dates</h5>
                            <span className='prod-rate'><FaRupeeSign />220/. per kg</span>
                        </Link>

                    </div>


                </Carousel>
            </div>
        </>
    )
}


export function MultiSlide2() {



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
        }
    }
    return (
        <>
            <div className="prod-slide">
                <div className="div-prod-head">
                    <h3 className='prod-head-big-card'>Best Quality with normal price</h3>
                </div>
                <Carousel responsive={responsive}
                >
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={cranberry} alt="Almond" />
                            <h5 className='prod-desc'>Dried Californian best Quality Cranberries</h5>
                            <span className='prod-rate'><FaRupeeSign />1000 per kg</span>
                        </Link>


                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={date} alt="Almond" />
                            <h5 className='prod-desc'>Mejdoul saudi Dates Big Size medjool khajoor</h5>
                            <span className='prod-rate'><FaRupeeSign />1200 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={hazelnut} alt="Almond" />
                            <h5 className='prod-desc'>Agile Organic Turkish Hazelnuts Raw & Dehulled</h5>
                            <span className='prod-rate'><FaRupeeSign />2000 per kg</span>
                        </Link>


                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={peanuts} alt="Almond" />
                            <h5 className='prod-desc'>PNC Quality Bazar Premium Whole Groundnut</h5>
                            <span className='prod-rate'><FaRupeeSign />135 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView1">
                            <img className='image-style' src={cashew} alt="Almond" />
                            <h5 className='prod-desc'>Good Life W240 Cashew Shelled</h5>
                            <span className='prod-rate'><FaRupeeSign />1200 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={kismis} alt="Almond" />
                            <h5 className='prod-desc'>Afghani Small Green Raisins Kismish</h5>
                            <span className='prod-rate'><FaRupeeSign />560 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={drydates} alt="Almond" />
                            <h5 className='prod-desc'>Jd Nuts Premium yello Dry Dates</h5>
                            <span className='prod-rate'><FaRupeeSign />500 per kg</span>
                        </Link>
                    </div>
                    
                    <div className='card'>
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={dryfig} alt="Almond" />
                            <h5 className='prod-desc'>Anjeer Jumbo Dried Figs Fresh stock</h5>
                            <span className='prod-rate'><FaRupeeSign />200 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={lotuseedpop} alt="Almond" />
                            <h5 className='prod-desc'>Classic Harvest Regular Lotus Seed Pop</h5>
                            <span className='prod-rate'><FaRupeeSign />950 per kg</span>
                        </Link>


                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={coconut} alt="Almond" />
                            <h5 className='prod-desc'>khopra copra Dry coconut halves</h5>
                            <span className='prod-rate'><FaRupeeSign />540 per kg</span>
                        </Link>

                    </div>


                </Carousel>
            </div>
        </>
    )
}
export function MultiSlide3() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }
    return (
        <>
            <div className="prod-slide">
                <div className="div-prod-head">
                    <h4 className='prod-head'>Best  Sellers products</h4>
                </div>
                <Carousel responsive={responsive}
                >
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={prunes} alt="Almond" />
                            <h5 className='prod-desc'>Natrurally Dried prunes seedless</h5>
                            <span className='prod-rate'><FaRupeeSign />1000 per kg</span>
                        </Link>


                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={drygoji} alt="Almond" />
                            <h5 className='prod-desc'>Premium Dried Goji Berries</h5>
                            <span className='prod-rate'><FaRupeeSign />1199 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={drydates} alt="Almond" />
                            <h5 className='prod-desc'>Jd Nuts Premium yello Dry Dates</h5>
                            <span className='prod-rate'><FaRupeeSign />220 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={date} alt="Almond" />
                            <h5 className='prod-desc'>Mejdoul saudi Dates Big Size medjool khajoor</h5>
                            <span className='prod-rate'><FaRupeeSign />1200 per kg</span>
                        </Link>

                    </div>
                    <div className='card'>
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={dryfig} alt="Almond" />
                            <h5 className='prod-desc'>Anjeer Jumbo Dried Figs Fresh stock</h5>
                            <span className='prod-rate'><FaRupeeSign />542 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={lotuseedpop} alt="Almond" />
                            <h5 className='prod-desc'>Classic Harvest Regular Lotus Seed Pop</h5>
                            <span className='prod-rate'><FaRupeeSign />950 per kg</span>
                        </Link>


                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={peanuts} alt="Almond" />
                            <h5 className='prod-desc'>PNC Quality Bazar Premium Whole Groundnut</h5>
                            <span className='prod-rate'><FaRupeeSign />135 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={coconut} alt="Almond" />
                            <h5 className='prod-desc'>khopra copra Dry coconut halves</h5>
                            <span className='prod-rate'><FaRupeeSign />250 per kg</span>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to="/Product/ProductView">
                            <img className='image-style' src={soyanuts} alt="Almond" />
                            <h5 className='prod-desc'>Roasty Tasty Soy Nuts Healthy</h5>
                            <span className='prod-rate'><FaRupeeSign />940 per kg</span>
                        </Link>

                    </div>


                </Carousel>
            </div>
        </>
    )
}

