import {HiFire} from 'react-icons/hi'
import Navbar from '../Navbar'
import NavigationComponent from '../NavigationComponent'
import SavedVideoCard from '../SavedVideoCard'

import {
  SaveVideosMainContainer,
  SavedContainer,
  TopBannerContainer,
  Heading,
  IconContainer,
  SavedListContainer,
  NoSavedVideosContainer,
  NosaveImage,
  Paratext,
} from './styledComponents'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

const SaveVideos = () => (
  <ThemeAndRequiredContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      return (
        <>
          <Navbar />
          <SaveVideosMainContainer data-testid="savedVideos">
            <NavigationComponent />
            <SavedContainer bgColor={bgColor}>
              <TopBannerContainer bgColor={bgColor}>
                <IconContainer bgColor={bgColor}>
                  <HiFire color="#ff0b37" size={25} />
                </IconContainer>
                <Heading color={textColor}>Saved Videos</Heading>
              </TopBannerContainer>
              {savedVideos.length > 0 ? (
                <SavedListContainer bgColor={bgColor}>
                  {savedVideos.map(eachVideo => (
                    <SavedVideoCard
                      eachVideoDetails={eachVideo}
                      key={eachVideo.id}
                    />
                  ))}
                </SavedListContainer>
              ) : (
                <NoSavedVideosContainer bgColor={bgColor}>
                  <NosaveImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <Heading color={textColor}>No saved videos found</Heading>
                  <Paratext color={textColor}>
                    You can save your videos while watching them
                  </Paratext>
                </NoSavedVideosContainer>
              )}
            </SavedContainer>
          </SaveVideosMainContainer>
        </>
      )
    }}
  </ThemeAndRequiredContext.Consumer>
)

export default SaveVideos
