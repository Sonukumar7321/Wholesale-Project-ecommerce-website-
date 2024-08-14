import React from 'react'
import MultiSlide, { MultiSlide2, MultiSlide3 } from '../Slide/MultiSlide.js'
import './Product.css'

const Product = () => {
  return (
    <>

      <div className='Section'>
        <div className="contenr">
        <MultiSlide  />
        <MultiSlide2 />
        <MultiSlide3 />
        </div>
       
          <div className='descr'>
            <h3 className='heading'>Dry Fruits Description</h3><hr />

            <p className='descr-text'>Dry fruits and nuts are an important part of our food pyramid.
              One needs to consume them regularly for good health and nutrition.
              You can buy a wide variety of dry fruits online, including
              raisins, dates, cashews, almonds, pistachio, and walnuts.
              Reap the amazing health benefits of these superfoods by including
              them in your daily diet. They provide an abundant supply of nutrients to maintain
              the good health of the mind and body. They are rich in vitamins, minerals, proteins,
              calcium, iron, potassium, antioxidants, and several other nutrients.
              They are an excellent replacement for fried and unhealthy snacks when looking
              for a quick bite to munch on. You can also keep a jar of assorted nuts and dried
              fruits on the dining table or your study table to snack on as healthy treats.
              Add them to milk or homemade sweets or make your gravies richer. You can buy them onlin0e
              from brands such as Evergreen Farms, Farmley, Happilo, Lion, and Naturoz. Choose from
              packaging available in different quantities. You can check out dry fruits 1kg price,
              500 grams price, 200 grams price, or combo packs based on your requirements.
              You can select and buy dry fruits online, add them to your cart for doorstep delivery.
            </p>
          </div>
      </div>

    </>
  )
}

export default Product
