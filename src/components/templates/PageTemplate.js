/* @flow */

import * as React from 'react'

type Props = {
  children?: React.Node
}

const PageTemplate = ({ children }: Props) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <main
        style={{
          padding: '1rem'
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default PageTemplate
