import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import almond from '../Assets/almond.jpg'
import walnut from '../Assets/walnut.jpg'
import cashew from '../Assets/cashew.jpg'
import kismis from '../Assets/kismis.jpg'
import dryfig from '../Assets/dryfig.jpeg'
import date from '../Assets/Dates.jpg'
import peanuts from '../Assets/peanuts.jpeg'
import coconut from '../Assets/drycoconut.jpeg'
import drydates from '../Assets/drydates.jpeg'
import lotuseedpop from '../Assets/lotuseedpop.jpeg'
import { FaRupeeSign } from "react-icons/fa";
import './productSlide.css'


function Slide() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
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
                    <h3 className='prod-head'>Features Product</h3>
                </div>
                <Carousel responsive={responsive}
                >
                    <div className="card">
                        <img className='image-style' src={almond} alt="Almond" />
                        <h5 className='prod-desc'>American (California) Badam jumbo Size</h5>
                        <span className='prod-rate'><FaRupeeSign />849 per kg</span>


                    </div>
                    <div className="card">
                        <img className='image-style' src={walnut} alt="Almond" />
                        <h5 className='prod-desc'>Walnut Inshell Chile paper shell kagzi</h5>
                        <span className='prod-rate'><FaRupeeSign />1250 per kg</span>


                    </div>
                    <div className="card">
                        <img className='image-style' src={cashew} alt="Almond" />
                        <h5 className='prod-desc'>Good Life W240 Cashew Shelled</h5>
                        <span className='prod-rate'><FaRupeeSign />1060 per kg</span>

                    </div>
                    <div className="card">
                        <img className='image-style' src={kismis} alt="Almond" />
                        <h5 className='prod-desc'>Afghani Small Green Raisins Kismish</h5>
                        <span className='prod-rate'><FaRupeeSign />480 per kg</span>

                    </div>
                    <div className="card">
                        <img className='image-style' src={drydates} alt="Almond" />
                        <h5 className='prod-desc'>Jd Nuts Premium yello Dry Dates</h5>
                        <span className='prod-rate'><FaRupeeSign />320 per kg</span>

                    </div>
                    <div className="card">
                        <img className='image-style' src={date} alt="Almond" />
                        <h5 className='prod-desc'>Mejdoul saudi Dates Big Size medjool khajoor</h5>
                        <span className='prod-rate'><FaRupeeSign />220 per kg</span>

                    </div>
                    <div className='card'>
                        <img className='image-style' src={dryfig} alt="Almond" />
                        <h5 className='prod-desc'>Anjeer Jumbo Dried Figs Fresh stock</h5>
                        <span className='prod-rate'><FaRupeeSign />542 per kg</span>

                    </div>
                    <div className="card">
                        <img className='image-style' src={lotuseedpop} alt="Almond" />
                        <h5 className='prod-desc'>Classic Harvest Regular Lotus Seed Pop</h5>
                        <span className='prod-rate'><FaRupeeSign />1200 per kg</span>


                    </div>
                    <div className="card">
                        <img className='image-style' src={peanuts} alt="Almond" />
                        <h5 className='prod-desc'>PNC Quality Bazar Premium Whole Groundnut</h5>
                        <span className='prod-rate'><FaRupeeSign />120 per kg</span>

                    </div>
                    <div className="card">
                        <img className='image-style' src={coconut} alt="Almond" />
                        <h5 className='prod-desc'>khopra copra Dry coconut halves</h5>
                        <span className='prod-rate'><FaRupeeSign />250 per kg</span>

                    </div>


                </Carousel>
            </div>
        </>
    )
}
export default Slide;