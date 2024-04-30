import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoCountAndYear,
  ButtonContainer,
  IconsContainer,
  ButtonsMainContainer,
  ViewsButtonsContainer,
  BottomContainer,
  ProileImage,
  Subscribers,
  Description,
  ReactPlayerContainer,
  HorizontalLine,
} from './styledComponents'

const VideoPlayer = props => {
  const {
    videoDetails,
    isLiked,
    isDisliked,
    clickedLike,
    clickedDisliked,
  } = props
  const {
    description,
    title,
    name,
    publishedAt,

    videoUrl,
    viewCount,
    profileImageUrl,
    subscriberCount,
  } = videoDetails

  const onClickLike = () => {
    clickedLike()
  }

  const onClickDislike = () => {
    clickedDisliked()
  }

  return (
    <ThemeAndRequiredContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const onClickSaveVideo = () => {
          addVideo(videoDetails)
        }

        const likedIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikedColor = isDisliked ? '#2563eb' : '#64748b'

        const textColor = isDarkTheme ? '#64748b' : '#231f20'

        let isVideoSaved
        const findVideoSaved = savedVideos.findIndex(
          eachvideo => eachvideo.id === videoDetails.id,
        )
        if (findVideoSaved === -1) {
          isVideoSaved = false
        } else {
          isVideoSaved = true
        }

        const saveColor = isVideoSaved ? '#2563eb' : textColor

        return (
          <VideoPlayerContainer>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} />
            </ReactPlayerContainer>
            <VideoTitle>{title}</VideoTitle>
            <ViewsButtonsContainer>
              <VideoCountAndYear>
                <p>{viewCount} views</p>
                <p>.</p>
                <p>{publishedAt}</p>
              </VideoCountAndYear>
              <ButtonsMainContainer>
                <ButtonContainer>
                  <IconsContainer
                    type="button"
                    color={likedIconColor}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike />
                    <p>Like</p>
                  </IconsContainer>
                  <IconsContainer
                    type="button"
                    color={dislikedColor}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike />
                    <p>Dislike</p>
                  </IconsContainer>
                  <IconsContainer
                    onClick={onClickSaveVideo}
                    type="button"
                    color={saveColor}
                  >
                    <CgPlayListAdd />
                    <p>Save</p>
                  </IconsContainer>
                </ButtonContainer>
              </ButtonsMainContainer>
            </ViewsButtonsContainer>
            <HorizontalLine />
            <BottomContainer>
              <ProileImage src={profileImageUrl} alt="channel logo" />
              <div>
                <VideoTitle>{name}</VideoTitle>
                <Subscribers>{subscriberCount} Subscribers</Subscribers>
                <Description>{description}</Description>
              </div>
            </BottomContainer>
          </VideoPlayerContainer>
        )
      }}
    </ThemeAndRequiredContext.Consumer>
  )
}

export default VideoPlayer
