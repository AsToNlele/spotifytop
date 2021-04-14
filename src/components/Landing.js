import React from 'react'
import { SpotifyAuth } from 'react-spotify-auth'
import { Container, Row, Col } from 'react-bootstrap'

const Landing = () => {
  const dev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

  return (
    <Container className='mt-5'>
      <h2 className='font-italic font-weight-lighter'>Spotify Top</h2>
      <Row style={{ marginTop: '10rem' }}>
        <Col md={6}>
          <h1
            className='font-weight-bolder landing-title'
            style={{ fontSize: '3.5rem' }}
          >
            Your top Spotify songs
          </h1>
          <h5 className='landing-desc'>
            All your favourite music divided by time range.
          </h5>
          <SpotifyAuth
            btnClassName={'btn btn-success'}
            redirectUri={
              dev
                ? 'http://localhost:3000/callback'
                : 'http://spotify.aston.sh/callback/'
            }
            clientID={process.env.REACT_APP_CLIENT_ID}
            scopes={['user-top-read']}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
