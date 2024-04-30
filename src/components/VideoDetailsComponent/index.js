import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar'
import NavigationComponent from '../NavigationComponent'
import VideoPlayer from '../VideoPlayer'
import {
  VideoDetailsMainContainer,
  VideoDetailsCOntainer,
  FailureContainer,
  FailureImage,
  ButtonStyle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  sucess: 'SUCCESS',
}

class VideoDetailsComponent extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  clickedLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickedDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.sucess,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
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

  renderVideoPlayer = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    return (
      <VideoPlayer
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisliked={isDisliked}
        clickedLike={this.clickedLike}
        clickedDisliked={this.clickedDisliked}
      />
    )
  }

  renderDesiredOutput = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.sucess:
        return this.renderVideoPlayer()

      default:
        return null
    }
  }

  render() {
    const {videoDetails} = this.state
    console.log(videoDetails)
    return (
      <div>
        <Navbar />
        <VideoDetailsMainContainer>
          <NavigationComponent />
          <VideoDetailsCOntainer>
            {this.renderDesiredOutput()}
          </VideoDetailsCOntainer>
        </VideoDetailsMainContainer>
      </div>
    )
  }
}

export default VideoDetailsComponent
