import {Component} from 'react'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import NavigationComponent from '../NavigationComponent'
import HomeVideosComponent from '../HomeVideosComponent'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

import {
  HomeContainer,
  BannerMainContainer,
  BannerLEftSideContainer,
  BannerImage,
  Bannerbutton,
  DisplayListContainer,
  SearchContainer,
  Searchbar,
  SearchIconContainer,
  AllHomeVideosList,
  BennerRIghtSideContainer,
} from './styledComponent'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    homeVideosList: [],
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getSearchResults = () => {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        name: eachVideo.channel.name,
        viewsCount: eachVideo.view_count,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
      }))
      this.setState({
        homeVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onClickCLoseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  renderNoVideosView = () => (
    <div className="failure-Conatiner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        className="failure-iage"
        alt="no videos"
      />
      <h1>No Search results found</h1>
      <p>Try different key words or remove search filter</p>
      <button type="button" className="retry" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderVideosView = () => {
    const {homeVideosList} = this.state
    const videosLength = homeVideosList.length
    return videosLength > 0 ? (
      <AllHomeVideosList>
        {homeVideosList.map(eachVideoDetails => (
          <HomeVideosComponent
            eachVideoDetails={eachVideoDetails}
            key={eachVideoDetails.id}
          />
        ))}
      </AllHomeVideosList>
    ) : (
      this.renderNoVideosView()
    )
  }

  renderFailure = () => (
    <div className="failure-Conatiner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        className="failure-iage"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong </h1>
      <p>
        We are having some trouble to complete your request.
        <br /> Please try again.
      </p>
      <button type="button" className="retry" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderExpectedView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    const {homeVideosList, searchInput, bannerDisplay} = this.state
    console.log(homeVideosList)
    return (
      <ThemeAndRequiredContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const color = isDarkTheme ? '#f9f9f9' : '#231f20'
          console.log(isDarkTheme)

          return (
            <div>
              <Navbar />

              <div className="home-container">
                <NavigationComponent />

                <HomeContainer data-testid="Home" bgColor={bgColor}>
                  <BannerMainContainer
                    data-testid="banner"
                    bannerDisplay={bannerDisplay}
                  >
                    <BannerLEftSideContainer>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <p>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI{' '}
                      </p>
                      <Bannerbutton type="button">GET IT NOW</Bannerbutton>
                    </BannerLEftSideContainer>

                    <BennerRIghtSideContainer
                      data-testid="close"
                      onClick={this.onClickCLoseBanner}
                    >
                      <AiOutlineClose size={20} />
                    </BennerRIghtSideContainer>
                  </BannerMainContainer>
                  <DisplayListContainer color={color}>
                    <SearchContainer>
                      <Searchbar
                        type="search"
                        placeholder="search"
                        value={searchInput}
                        onChange={this.onChangeSearch}
                        color={color}
                      />
                      <SearchIconContainer onClick={this.getSearchResults}>
                        <AiOutlineSearch size={25} data-testid="searchButton" />
                      </SearchIconContainer>
                    </SearchContainer>
                    {this.renderExpectedView()}
                  </DisplayListContainer>
                </HomeContainer>
              </div>
            </div>
          )
        }}
      </ThemeAndRequiredContext.Consumer>
    )
  }
}

export default Home
