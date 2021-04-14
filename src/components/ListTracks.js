import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Tabs, Tab } from 'react-bootstrap'
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

const ListTracks = ({ token }) => {
  const [shortTracks, setShortTracks] = useState([])
  const [mediumTracks, setMediumTracks] = useState([])
  const [longTracks, setLongTracks] = useState([])

  useEffect(() => {
    const getTop = async (type, timeRange, limit) => {
      let resp = await axios.get(
        `https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=${limit}&offset=0`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      return resp
    }

    getTop('tracks', 'short_term', 8).then((resp) =>
      setShortTracks(resp.data.items)
    )
    getTop('tracks', 'medium_term', 8).then((resp) =>
      setMediumTracks(resp.data.items)
    )
    getTop('tracks', 'long_term', 8).then((resp) =>
      setLongTracks(resp.data.items)
    )
  }, [token])

  return (
    <div>
      <br />
      <Tabs defaultActiveKey='short' id='uncontrolled-tab-example'>
        <Tab eventKey='short' title='Last 4 Weeks'>
          <Row>
            <Tracks tracks={shortTracks} />
          </Row>
        </Tab>
        <Tab eventKey='medium' title='Last 6 Months'>
          <Row>
            <Tracks tracks={mediumTracks} />
          </Row>
        </Tab>
        <Tab eventKey='long' title='All-time'>
          <Row>
            <Tracks tracks={longTracks} />
          </Row>
        </Tab>
      </Tabs>
    </div>
  )
}

export default ListTracks
