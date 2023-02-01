import React from 'react'
import axios from 'axios'

import './App.css'

const baseUrl = 'https://api.smartthings.com/v1/devices/'
const deviceId = 'deviceId'
const accessToken = 'accessToken'

const App = () => {
  const handleOffClick = () => {
    axios
      .post(
        `${baseUrl}${deviceId}/commands`,
        {
          commands: [
            {
              component: 'main',
              capability: 'switch',
              command: 'off',
              arguments: [],
              name: 'off',
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleOnClick = () => {
    axios
      .post(
        `${baseUrl}${deviceId}/commands`,
        {
          commands: [
            {
              component: 'main',
              capability: 'switch',
              command: 'on',
              arguments: [],
              name: 'on',
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleVolUpClick = () => {
    axios
      .post(
        `${baseUrl}${deviceId}/commands`,
        {
          commands: [
            {
              component: 'main',
              capability: 'audioVolume',
              command: 'volumeUp',
              arguments: [],
              name: 'volumeUp',
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleVolDownClick = () => {
    axios
      .post(
        `${baseUrl}${deviceId}/commands`,
        {
          commands: [
            {
              component: 'main',
              capability: 'audioVolume',
              command: 'volumeDown',
              arguments: [],
              name: 'volumeDown',
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="App">
      <button className="element" onClick={() => handleOffClick()}>
        Off
      </button>
      <button className="element" onClick={() => handleOnClick()}>
        On
      </button>
      <button className="element" onClick={() => handleVolUpClick()}>
        VolUp
      </button>
      <button className="element" onClick={() => handleVolDownClick()}>
        VolDown
      </button>
    </div>
  )
}

export default App
