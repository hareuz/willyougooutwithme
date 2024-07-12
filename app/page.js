'use client'

import Link from 'next/link';
import {useState, useEffect} from 'react';
import { FaSpotify } from 'react-icons/fa'; // Import Spotify icon from react-icons

export default function page() {

  const [img, $img] = useState('i-want-to-play-a-game-play-time');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false); // State to control the visibility of the Spotify player
  const [currentSong, setCurrentSong] = useState(''); // State to store the current song URL

  const songs = [
    "https://open.spotify.com/embed/track/1xLoBwOKMtCq3tALgb8F6A?utm_source=generator"
  ];

  const updteImg = (im) => {
    $img(im);
  }

  const nah = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({x: `${x}%`, y: `${y}%`});
    updteImg('chowder-crying');
  };

  const dontdoit = () => {
    nah();
    updteImg('shock');
    $how(true)
  }

  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setCurrentSong(songs[randomIndex]);
    setShowPlayer(true);

    // Force autoplay by interacting with the iframe
    setTimeout(() => {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
      }
    }, 100);
  }

  return (
    <div className='box'>
      <img alt='gumball' className='gif' src={`/${img}.gif`} />
      {how ? 'Hmmmph, Theres no choice!' : 'Will you go out with me?'}
      <div className='btns'>
        <Link className='yes' href='/yay'>
          <button onMouseOver={() => updteImg('crying-chowder')} onMouseOut={() => updteImg('waiting')}>
            Yes
          </button>
        </Link>
        <button className='no' 
          style={p ? {position: 'absolute', top: p.x, right: p.y} : null} 
          onClick={dontdoit} onMouseOver={nah}>
            No
        </button> 
        <button className='spotify' onClick={playRandomSong}>
          <FaSpotify className='spotify-icon' /> {/* Apply the className */}
        </button>
      </div>
      {showPlayer && (
        <iframe
          src={currentSong}
          width="300"
          height="80"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{ position: 'absolute', bottom: '10px', left: '10px' }}
        ></iframe>
      )}
    </div>
  )
}
