import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkOptions = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const EachList = styled.li`
  padding-left: 15px;
  display: flex;
  align-self: center;
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 8px;
    justify-content: center;
  }

  width: 100%;
  padding: 15px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};

  margin-bottom: 15px;
`
export const NavLinkContainer = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactContainer = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${props => props.color};
  padding-left: 5px;
`
export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
  @media screen and (max-width: 767px) {
    width: 35px;
    height: 35px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ContactsQuotes = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  width: 60%;
  @media screen and (max-width-767px) {
    font-size: 18px;
  }
`
export const LinkContainer = styled.div`
  width: 30%;
  margin-top: 60px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeadingContent = styled(ContactsQuotes)`
  font-size: 22px;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
export const Navpage = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const NavLinkSmContainer = styled(NavLinkContainer)`
  width: 90%;
  @media screen and (max-width: 767px) {
    display: block;
  }
`
export const LinkOptionsSm = styled.nav`
  display: flex;
  width: 100%;
`
export const LinkContainerSm = styled.div`
  display: flex;

  width: 100%;
  margin-top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
