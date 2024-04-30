import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import Navbar from '../Navbar'
import NavigationComponent from '../NavigationComponent'
import TrendingList from '../TrendingList'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'
import {
  TrendingVideosMainContainer,
  TrendingContainer,
  TopBannerContainer,
  IconContainer,
  TrendingListContainer,
  FailureContainer,
  TrendingVideoUnorderList,
  FailureImage,
  ButtonStyle,
  LoadingContainer,
  Heading,
} from './styledComponents'

const apiStatisConstans = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'IN_FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {trendingVideo: [], apiStatus: apiStatisConstans.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatisConstans.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        trendingVideo: updatedData,
        apiStatus: apiStatisConstans.success,
      })
    } else {
      this.setState({apiStatus: apiStatisConstans.failure})
    }
  }

  renderVideoView = () => {
    const {trendingVideo} = this.state
    return (
      <TrendingVideoUnorderList>
        {trendingVideo.map(eachVideo => (
          <TrendingList eachVideoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideoUnorderList>
    )
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingContainer>
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
      case apiStatisConstans.inProgress:
        return this.renderLoadingView()
      case apiStatisConstans.failure:
        return this.renderFailureView()
      case apiStatisConstans.success:
        return this.renderVideoView()
      default:
        return null
    }
  }

  render() {
    const {trendingVideo} = this.state
    console.log(trendingVideo)
    return (
      <ThemeAndRequiredContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#ffffff' : '#231f20'
          return (
            <div data-testid="trending">
              <Navbar />
              <TrendingVideosMainContainer>
                <NavigationComponent />
                <TrendingContainer>
                  <TopBannerContainer bgColor={bgColor}>
                    <IconContainer bgColor={bgColor}>
                      <HiFire color="#ff0b37" size={25} />
                    </IconContainer>
                    <Heading color={textColor}>Trending</Heading>
                  </TopBannerContainer>
                  <TrendingListContainer bgColor={bgColor}>
                    {this.renderPrefferedOutput()}
                  </TrendingListContainer>
                </TrendingContainer>
              </TrendingVideosMainContainer>
            </div>
          )
        }}
      </ThemeAndRequiredContext.Consumer>
    )
  }
}

export default Trending
