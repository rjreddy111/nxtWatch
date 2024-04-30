import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'
import {
  SavedList,
  Heading,
  DetailsContainer,
  ParagraphContent,
  ViewsYearContainer,
  Dot,
  ThumbnailImage,
  LinkToVideo,
} from './styledComponents'

const SavedVideoCard = props => {
  const {eachVideoDetails} = props
  const {
    id,

    title,
    name,
    publishedAt,
    thumbnailUrl,

    viewCount,
  } = eachVideoDetails

  return (
    <ThemeAndRequiredContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <>
            <LinkToVideo to={`/videos/${id}`} color={textColor}>
              <SavedList bgColor={bgColor}>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <DetailsContainer>
                  <Heading>{title}</Heading>
                  <ParagraphContent>{name}</ParagraphContent>
                  <ViewsYearContainer>
                    <p>{viewCount} views</p>
                    <Dot>$</Dot>
                    <p>{publishedAt}</p>
                  </ViewsYearContainer>
                </DetailsContainer>
              </SavedList>
            </LinkToVideo>
          </>
        )
      }}
    </ThemeAndRequiredContext.Consumer>
  )
}

export default SavedVideoCard
