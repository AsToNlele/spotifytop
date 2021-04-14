import React, { useEffect, useState } from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'

import 'react-spotify-auth/dist/index.css'

import Home from './components/Home'
import Landing from './components/Landing'

const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState()
  useEffect(() => {
    let token = Cookies.get('spotifyAuthToken')
    setSpotifyAuthToken(token)
  }, [])
  return (
    <div className='app'>
      {spotifyAuthToken ? (
        <SpotifyApiContext.Provider value={spotifyAuthToken}>
          {/* Logged in */}
          <Home token={spotifyAuthToken} />
        </SpotifyApiContext.Provider>
      ) : (
        <Landing />
      )}
    </div>
  )
}
export default App
