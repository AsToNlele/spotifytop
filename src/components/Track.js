import React from 'react'
import { Card } from 'react-bootstrap'

const Track = ({ track, index }) => {
  return (
    <Card
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#191c35',
        color: '#f65164 ',
      }}
    >
      <Card.Img variant='top' src={track.album.images[0].url} />
      <Card.Body>
        <Card.Title className='text-center'>
          <span className='font-italic' style={{ color: 'white' }}>
            {index + 1}.
          </span>
          <br />
          <span className='font-weight-normal'>{track.artists[0].name}</span>
          <br />
          <span className='font-weight-light'>{track.name}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default Track
