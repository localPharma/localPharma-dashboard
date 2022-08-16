import React from 'react'
import Link from 'next/link'

function AnchorLink({children, route, pass, target}) {
  return (
    <Link href={route} passHref={pass || false } >
        <a target={ target ? "_blank" : null } >
            {children}
        </a>
    </Link>
  )
}

export default AnchorLink