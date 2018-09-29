/* @flow */

import * as React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children?: React.Node
}

const Overlay = ({ children }: Props) => {
  const root = document.getElementById('root')

  if (!root) {
    throw new Error('not found root')
  }

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 6000000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(255,255,255,0.5)'
      }}
    >
      {children}
    </div>,
    root
  )
}

export default Overlay
