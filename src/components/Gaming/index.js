import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import NavigationComponent from '../NavigationComponent'
import GamingList from '../GamingList'
import './index.css'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

import {
  GamingMainContainer,
  GamingContainer,
  TopBannerContainer,
  IconContainer,
  GamingListContainer,
  GamingUnorderList,
  FailureContainer,
  FailureImage,
  ButtonStyle,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGames()
  }

  onRetry = () => {
    this.getGames()
  }

  getGames = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingOutput = () => {
    const {gamingList} = this.state
    return (
      <GamingUnorderList>
        {gamingList.map(eachGame => (
          <GamingList eachGameDetails={eachGame} key={eachGame.id} />
        ))}
      </GamingUnorderList>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. <br />
        Please try again.
      </p>
      <ButtonStyle type="button" onClick={this.onRetry}>
        Retry
      </ButtonStyle>
    </FailureContainer>
  )

  renderPrefferedOutput = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderGamingOutput()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndRequiredContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          return (
            <div>
              <Navbar />
              <GamingMainContainer data-testid="gaming">
                <NavigationComponent />
                <GamingContainer>
                  <TopBannerContainer bgColor={bgColor}>
                    <IconContainer>
                      <SiYoutubegaming size={25} color="ff0b37" />
                    </IconContainer>
                    <Heading color={textColor}>Gaming</Heading>
                  </TopBannerContainer>
                  <GamingListContainer bgColor={bgColor}>
                    {this.renderPrefferedOutput()}
                  </GamingListContainer>
                </GamingContainer>
              </GamingMainContainer>
            </div>
          )
        }}
      </ThemeAndRequiredContext.Consumer>
    )
  }
}

export default Gaming
