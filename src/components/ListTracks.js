import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Button } from 'react-bootstrap'
import Track from './Track'

const Tracks = ({ tracks }) => {
  return tracks.map((item, index) => {
    return (
      <Col md={3} key={item.external_ids.isrc} style={{ marginBottom: '30px' }}>
        <Track track={item} index={index} key={item.external_ids.isrc} />
      </Col>
    )
  })
}

const ListTracks = ({ timeRange, limit, token }) => {
  const [tracks, setTracks] = useState([])
  const [type] = useState('tracks')
  const [offset, setOffset] = useState(0)

  const loadMore = async () => {
    setOffset(offset + limit)
  }

  useEffect(() => {
    const getTopTracks = async () => {
      let resp = await axios.get(
        `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      return resp
    }

    if (limit + offset !== tracks.length) {
      getTopTracks().then((resp) => {
        let tempTracks = tracks
        tempTracks = tempTracks.concat(resp.data.items)
        setTracks(tempTracks)
      })
    }
  }, [token, limit, timeRange, type, offset, tracks])

  return (
    <Row>
      <Tracks tracks={tracks} />
      <Col style={{ textAlign: 'center' }}>
        <Button onClick={loadMore}>Load more</Button>
        <br />
        <br />
      </Col>
    </Row>
  )
}

export default ListTracks
