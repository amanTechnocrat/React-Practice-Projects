import React, { Component } from 'react'
import text from './text.gif'

export default class Symbol extends Component {
  render() {
    return (
      <div>
          <img src= {text} alt='Symbol' width="105" height="30"/>
      </div>
    )
  }
}
