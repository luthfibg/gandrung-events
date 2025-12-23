import React from 'react'
import logoHotelHorison from '../assets/customers/horison-hotel.jpg'
import logoAncol from '../assets/customers/logo-ancol.jpg'
import logoBankOcbc from '../assets/customers/logo-bankocbc.png'
import logoBrigif17 from '../assets/customers/logo-brigif17.png'
import logoBumiSangkuriang from '../assets/customers/logo-bumisangkuriang.jpg'
import logoHotelHarris from '../assets/customers/Logo-Harris-Hotel.png'
import logoHotelHilton from '../assets/customers/logo-hiltonhotel.png'
import logoHotelIntercontinental from '../assets/customers/logo-hotelintercon.png'
import logoHtbspm from '../assets/customers/logo-htbspm.png'
import logoItb from '../assets/customers/logo-itb.png'
import logoKbp from '../assets/customers/logo-kbp.jpg'
import logoKodim from '../assets/customers/logo-kodim.jpg'
import logoMekarwangi from '../assets/customers/logo-mekarwangi.jpg'
import logoPusdikarmed from '../assets/customers/logo-pusdikarmed.png'
import Sportjabar from '../assets/customers/logo-sportjabar.jpg'

const Customers = () => {
  return (
    <section className="py-10 bg-white">
        <div className="container mx-auto px-4 mb-8 text-center">
            <h2 className="text-2xl lg:text-4xl font-mulish">Pelanggan Kami</h2>
        </div>

        <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-20">
            <img className="mx-8 h-30" src={logoHotelHorison} alt="Hotel Horison" />
            <img className="mx-8 h-30" src={logoAncol} alt="Ancol" />
            <img className="mx-8 h-30" src={logoBankOcbc} alt="Bank OCBC" />
            <img className="mx-8 h-30" src={logoBrigif17} alt="Brigif 17" />
            <img className="mx-8 h-30" src={logoBumiSangkuriang} alt="Bumi Sangkuriang" />
            <img className="mx-8 h-30" src={logoHotelHarris} alt="Hotel Harris" />
            <img className="mx-8 h-30" src={logoHotelHilton} alt="Hotel Hilton" />
            <img className="mx-8 h-30" src={logoHotelIntercontinental} alt="Hotel Intercontinental" />
            <img className="mx-8 h-30" src={logoHtbspm} alt="HTS BPM" />
            <img className="mx-8 h-30" src={logoItb} alt="ITB" />
            <img className="mx-8 h-30" src={logoKbp} alt="KBP" />
            <img className="mx-8 h-30" src={logoKodim} alt="Kodim" />
            <img className="mx-8 h-30" src={logoMekarwangi} alt="Mekarwangi" />
            <img className="mx-8 h-30" src={logoPusdikarmed} alt="Pusdikarmed" />
            <img className="mx-8 h-30" src={Sportjabar} alt="Sport Jabar" />
            </div>

            {/* <div className="flex animate-marquee whitespace-nowrap py-20">
              <img className="mx-8 h-20" src={logoHotelHorison} alt="Hotel Horison" />
              <img className="mx-8 h-20" src={logoAncol} alt="Ancol" />
              <img className="mx-8 h-20" src={logoBankOcbc} alt="Bank OCBC" />
              <img className="mx-8 h-20" src={logoBrigif17} alt="Brigif 17" />
              <img className="mx-8 h-20" src={logoBumiSangkuriang} alt="Bumi Sangkuriang" />
              <img className="mx-8 h-20" src={logoHotelHarris} alt="Hotel Harris" />
              <img className="mx-8 h-20" src={logoHotelHilton} alt="Hotel Hilton" />
              <img className="mx-8 h-20" src={logoHotelIntercontinental} alt="Hotel Intercontinental" />
              <img className="mx-8 h-20" src={logoHtbspm} alt="HTS BPM" />
              <img className="mx-8 h-20" src={logoItb} alt="ITB" />
              <img className="mx-8 h-20" src={logoKbp} alt="KBP" />
              <img className="mx-8 h-20" src={logoKodim} alt="Kodim" />
              <img className="mx-8 h-20" src={logoMekarwangi} alt="Mekarwangi" />
              <img className="mx-8 h-20" src={logoPusdikarmed} alt="Pusdikarmed" />
              <img className="mx-8 h-20" src={Sportjabar} alt="Sport Jabar" />
            </div> */}

            
        </div>
    </section>
  )
}

export default Customers