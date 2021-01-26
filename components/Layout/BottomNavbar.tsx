import styled from '@emotion/styled'
import React from 'react'
import COLORS from '../../constants/enums/colors.enum'
import ROUTES from '../../constants/routes'
import BottomNavLink from './BottomNavLink'

type StyledNavProps = {
  light: boolean
}

const StyledNav = styled.nav<StyledNavProps>`
  background: ${(props: StyledNavProps) =>
    props.light ? COLORS.CREAMYWHITE : 'black'};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
  }
`

const BottomNavbar = () => {
  return (
    <StyledNav light>
      <ul>
        {ROUTES.map((route) => (
          <BottomNavLink key={route.to} to={route.to} label={route.label} />
        ))}
      </ul>
    </StyledNav>
  )
}

export default BottomNavbar
