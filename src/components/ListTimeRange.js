import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import ListTracks from './ListTracks'

const ListTimeRange = ({ token }) => {
  const limit = 8

  return (
    <div>
      <br />
      <Tabs defaultActiveKey='short' id='timerange-tab'>
        <Tab eventKey='short' title='Last 4 Weeks'>
          <ListTracks timeRange='short_term' limit={limit} token={token} />
        </Tab>
        <Tab eventKey='medium' title='Last 6 Months'>
          <ListTracks timeRange='medium_term' limit={limit} token={token} />
        </Tab>
        <Tab eventKey='long' title='All-time'>
          <ListTracks timeRange='long_term' limit={limit} token={token} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default ListTimeRange
