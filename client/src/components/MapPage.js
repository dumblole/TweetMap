import React from "react"

import {
  Map,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

import 'leaflet'

class MapPage extends React.Component {
  constructor () {
    super()

    this.state = {
      lat: 0,
      lon: 0,
      zoom: 13
    }



  }

  render () {
    const position = [this.state.lat, this.state.lon]

    return (
      <div className='map'>
        <Map center={position} zoom={this.state.zoom} className='map__map'>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

        </Map>
      </div>
    )
  }
}

export default MapPage
