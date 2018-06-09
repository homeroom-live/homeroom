import React from 'react'
import Link from 'next/link'

class Homeroom extends React.Component {
  render() {
    return (
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    )
  }
}

export default Homeroom
