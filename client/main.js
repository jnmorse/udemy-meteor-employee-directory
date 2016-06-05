import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>Hello There!</div>
  )
}

Meteor.startup(() => {
  // Create Mount Point for React
  const mountPoint = document.createElement('div')
  document.body.appendChild(mountPoint)

  // Render App Component
  ReactDOM.render(<App />, mountPoint)
})
