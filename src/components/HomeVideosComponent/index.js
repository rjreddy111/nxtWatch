import {Link} from 'react-router-dom'
import {
  EachVideoList,
  EachListContents,
  ProfileImage,
  TextContent,
} from './styledComponents'
import './index.css'
import ThemeAndRequiredContext from '../../context/ThemeAndRequiredContext'

const HomeVideosComponent = props => (
  <ThemeAndRequiredContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const {eachVideoDetails} = props
      const {
        id,
        title,
        name,
        profileImageUrl,
        viewsCount,
        publishedAt,
        thumbnailUrl,
      } = eachVideoDetails
      return (
        <Link to={`/videos/${id}`} className="link">
          <EachVideoList>
            <img src={thumbnailUrl} alt="video thumbnail" />
            <EachListContents>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <div>
                <TextContent color={textColor}>{title}</TextContent>
                <p className="count">{name}</p>
                <div className="count-published-at">
                  <p className="count">{viewsCount} views</p>
                  <span className="dot"> </span>
                  <p className="count"> {publishedAt}</p>
                </div>
              </div>
            </EachListContents>
          </EachVideoList>
        </Link>
      )
    }}
  </ThemeAndRequiredContext.Consumer>
)

export default HomeVideosComponent
