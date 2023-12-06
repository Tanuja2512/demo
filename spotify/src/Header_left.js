import React from 'react';
import './Header_left.css';

export default function Header_left() {
  return (
<div>
        <div className='home_search_div'>
          <h1 className='spotify_text'>
            <i class="fa fa-spotify" aria-hidden="true" id='spoti_icon'></i>Spotify
          </h1>
                                 <br/>
         <ul className="home__search_ul">
          <li className='home_li'><i class="fa-solid fa-house fa-xl"></i>Home</li>
          <li className='seacrh_li'><i class="fa-solid fa-magnifying-glass fa-xl"></i>search</li>
         </ul>
      </div>

        
    </div>
  )
}
