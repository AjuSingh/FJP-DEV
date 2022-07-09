import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',backgroundColor:'aliceblue',justifyContent: 'center',alignItems:'center',padding:'1rem'}}>
        <h1>Movies</h1>
        <h2 style={{marginLeft:'2rem'}}>Favorites</h2>
      </div>
    )
  }
}
