import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

import {
  GameListItem,
  ImageDisplay,
  Heading,
  Paragraph,
  LinkToVideo,
} from './styledComponents'

const GamingList = props => (
  <ThemeAndRequiredContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {eachGameDetails} = props
      const {id, title, thumbnailUrl, viewCount} = eachGameDetails
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      return (
        <LinkToVideo to={`/videos/${id}`} color={textColor}>
          <GameListItem>
            <ImageDisplay src={thumbnailUrl} alt="video thumbnail" />
            <Heading color={textColor}>{title}</Heading>
            <Paragraph>{viewCount} Watching Worldwide</Paragraph>
          </GameListItem>
        </LinkToVideo>
      )
    }}
  </ThemeAndRequiredContext.Consumer>
)

export default GamingList
