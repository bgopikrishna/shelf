import Link from 'next/link'
import React from 'react'

interface BottomNavLinkProps {
  to: string
  label: string
}

const BottomNavLink: React.FC<BottomNavLinkProps> = ({ to, label }) => {
  return (
    <li>
      <Link href={to}>
        <span>{label}</span>
      </Link>
    </li>
  )
}

export default BottomNavLink
