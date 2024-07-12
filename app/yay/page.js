"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaSpotify } from 'react-icons/fa'; // Import Spotify icon from react-icons

export default function Page() {
  const [favoriteIdea, setFavoriteIdea] = useState('');
  const [email, setEmail] = useState('');
  const [showPlayer, setShowPlayer] = useState(false); // State to control the visibility of the Spotify player
  const [currentSong, setCurrentSong] = useState(''); // State to store the current song URL
  const [customIdea, setCustomIdea] = useState(''); // State to store the custom idea

  const ideas = [
    'Visit to a graveyard',
    'Passenger princess duty (gloating n music involved)',
    'Eat to bite or whatever I skipped some eng classes',
    'Ghost (Dont u date)'
  ];

  const songs = [
    "https://open.spotify.com/embed/track/6WmIyn2fx1PKQ0XDpYj4VR?utm_source=generator"
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      favoriteIdea,
      user_email: email
    };

    emailjs.send('service_gor0ceq', 'template_27eho0j', templateParams, 'Cr6mC4HZtDiN-XAsJ')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email.');
      });
  };

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
      <img alt='yayyy' className='gif' src='/chowder.gif' />
      <h1>{'Yayyy~ lets plan <3'}</h1>
      <p>{'I have some fun ideas:'}</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {ideas.map((idea, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={favoriteIdea === idea}
                onChange={() => setFavoriteIdea(idea)}
              />
              <span className="checkmark"></span>
              {idea}
            </label>
          </li>
        ))}
      </ul>
      <p>{'What do you think?'}</p>
      <p style={{ fontSize: '0.8em' }}>{'(Custom suggestion can be added)'}</p>
      <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>
          {'Your favorite idea : '}
          <input 
            type='text' 
            name='favoriteIdea' 
            value={favoriteIdea} 
            onChange={(e) => setFavoriteIdea(e.target.value)} 
            required 
            className="oval-input" // Apply the new class
          />
        </label>
        <br />
        <label>
          {'Your email: '}
          <input 
            type='email' 
            name='user_email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="oval-input" // Apply the new class
          />
        </label>
        <button type='submit' style={{ marginLeft: '10px' }}>{'Submit!'}</button>
      </form>
      {favoriteIdea && (
        <p>{`Your favorite idea is : ${favoriteIdea}`}</p>
      )}
      <button className='spotify' onClick={playRandomSong}>
        <FaSpotify className='spotify-icon' /> {/* Apply the className */}
      </button>
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