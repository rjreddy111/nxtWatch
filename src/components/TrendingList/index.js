import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

import {
  TrendingListContainer,
  ThumbnailImage,
  Heading,
  ParagraphContent,
  ViewsYearContainer,
  Dot,
  LinkToVideo,
  ViewsYearMainContainer,
} from './styledComponents'

const TrendingList = props => (
  <ThemeAndRequiredContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {eachVideoDetails} = props
      const {
        id,
        name,
        title,

        thumbnailUrl,
        publishedAt,
        viewCount,
      } = eachVideoDetails

      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      return (
        <LinkToVideo to={`/videos/${id}`} color={textColor}>
          <TrendingListContainer>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ViewsYearMainContainer>
              <Heading color={textColor}>{title}</Heading>
              <ParagraphContent>{name}</ParagraphContent>
              <ViewsYearContainer>
                <p>{viewCount} views</p>
                <Dot>$</Dot>
                <p>{publishedAt}</p>
              </ViewsYearContainer>
            </ViewsYearMainContainer>
          </TrendingListContainer>
        </LinkToVideo>
      )
    }}
  </ThemeAndRequiredContext.Consumer>
)

export default TrendingList
