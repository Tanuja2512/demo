

import React from 'react';
import './Music.css';
import Thumbnail from './images/spotify_i.jpeg';
import Thumbnail2 from './images/spotify_ii.jpeg';
import Thumbnail3 from './images/spotify_i.jpeg';
import Thumbnail4 from './images/spotify_i.jpeg';
// import Thumbnail5 from './img_folder/spotify_v.jpeg';
export default function Music() {
  return (
    <div className='main_music_div'>
      <div className='all_mausic_container'>
        <div className="ist">
          <img src={Thumbnail} alt="img_thumbnail" />
          <div className='all_text_info_i'>
          <h3 className='ist_music_info'> Today's Top Hits </h3>
          <p className='ist_info_p'> Jung Kook is on the top of the Hottest 50! </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="ist">
          <img src={Thumbnail2} alt="img_thumbnail" />
          <div className='all_text_info_i'>
          <h3 className='ist_music_info'> Today's Top Hits </h3>
          <p className='ist_info_p'> Jung Kook is on the top of the Hottest 50! </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="ist">
          <img src={Thumbnail3} alt="img_thumbnail" />
          <div className='all_text_info_i'>
          <h3 className='ist_music_info'> Today's Top Hits </h3>
          <p className='ist_info_p'> Jung Kook is on the top of the Hottest 50! </p>
          </div>
        </div>
        {/* 4th */}
        <div className="ist">
          <img src={Thumbnail4}alt="img_thumbnail" />
          <div className='all_text_info_i'>
          <h3 className='ist_music_info'> Today's Top Hits </h3>
          <p className='ist_info_p'> Jung Kook is on the top of the Hottest 50! </p>
          </div>
        </div>
      </div>


<br />
<br />

    </div>

  )
}
