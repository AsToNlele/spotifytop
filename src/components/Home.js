import React, { useEffect, useState } from 'react'
import ListTimeRange from './ListTimeRange'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Cookies from 'js-cookie'
import axios from 'axios'

const Home = ({ token }) => {
  const [name, setName] = useState('')
  const logout = () => {
    Cookies.remove('spotifyAuthToken')
    window.location = '/'
  }

  useEffect(() => {
    // Get Users name
    const getName = async () => {
      let resp = await axios.get(`https://api.spotify.com/v1/me/`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

      let displayName = resp.data['display_name']

      return displayName
    }
    getName().then((displayName) => setName(displayName))
  }, [token])

  return (
    <Container className='mt-4'>
      <Row>
        <Col md={6}>
          <h1 className='font-italic'>Spotify Top</h1>
        </Col>
        <Col md={6}>
          <div style={{ float: 'right' }}>
            <span>{name}</span>
            <Button
              style={{
                backgroundColor: '#69DC9E',
                borderColor: 'transparent',
                color: '#202442',
                marginLeft: '1rem',
              }}
              onClick={logout}
            >
              <i className='fas fa-door-open'></i>
            </Button>
          </div>
        </Col>
      </Row>
      <ListTimeRange token={token} />
    </Container>
  )
}

export default Home
