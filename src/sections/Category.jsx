import React from 'react'
import CategoryCard from '../components/CategoryCard.jsx';
import BgCard1 from '../assets/vled-summarecon.jpeg';
import BgCard2 from '../assets/TV60-FloatingMarket.jpeg';
import BgCard3 from '../assets/Prod4.jpeg';
import BgCard4 from '../assets/Prod5.jpeg';
import BgCard5 from '../assets/Prod6.jpg';
import BgCard6 from '../assets/Prod7.jpeg';

import { Monitor, Presentation, Spotlight, Wind } from 'lucide-react';

const Category = () => {
  return (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-4">
            <CategoryCard name={'led videotron'} link={'catalog'} backgroundImage={`url(${BgCard1})`} icon={<Presentation size={48} color='rgb(61, 49, 41)' />} />
            <CategoryCard name={'digital promo'} link={'catalog'} backgroundImage={`url(${BgCard2})`} icon={<Monitor size={48} color='rgb(61, 49, 41)' />} />
            <CategoryCard name={'teleprompter'} link={'catalog'} backgroundImage={`url(${BgCard3})`} icon={<Monitor size={48} color='rgb(61, 49, 41)' />} />
            <CategoryCard name={'projector'} link={'catalog'} backgroundImage={`url(${BgCard4})`} icon={<Presentation size={48} color='rgb(61, 49, 41)' />} />
            <CategoryCard name={'lighting'} link={'catalog'} backgroundImage={`url(${BgCard5})`} icon={<Spotlight size={48} color='rgb(61, 49, 41)' />} />
            <CategoryCard name={'air purifier'} link={'catalog'} backgroundImage={`url(${BgCard6})`} icon={<Wind size={48} color='rgb(61, 49, 41)' />} />
        </div>
  )
}

export default Category