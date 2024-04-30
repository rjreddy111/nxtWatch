import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
`
export const LogoImage = styled.img`
  width: 150px;
`
export const ProfileImage = styled.img`
  width: 30px;
  margin-right: 15px;
`
export const ActionMainContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`
export const ButtonTheme = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-right: 15px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  padding: 5px;
  color: #3b82f6;
  background: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const WarningDisplay = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  padding: 20px;
`

export const WarningCancelButtons = styled.button`
  background-color: transparent;
  border-color: ${props => props.color};
  height: 35px;
  padding: 10px;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  margin-right: 30px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WarningConfirmButtons = styled.div`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  height: 35px;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
`
export const LogoImageContainer = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
`
export const LogoutButtonsm = styled(LogoutButton)`
  @media screen and (max-width: 767px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavbarmainContainer = styled.nav``
