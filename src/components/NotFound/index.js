import Navbar from '../Navbar'
import NavigationComponent from '../NavigationComponent'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImage,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndRequiredContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#ffffff' : '#231f20'
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Navbar />
          <NotFoundMainContainer>
            <NavigationComponent />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <Heading color={textColor}>Page Not Found</Heading>
              <Description>
                We are sorry, the page you requested could not be found
              </Description>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </ThemeAndRequiredContext.Consumer>
)

export default NotFound
