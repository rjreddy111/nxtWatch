import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingListContainer = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 25px;
`
export const ThumbnailImage = styled.img`
  width: 55%;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    width: 180px;
  }
`
export const Heading = styled.p`
  color: #231f20;
  font-size: 18px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const ParagraphContent = styled.p`
  color: #7e858e;
  font-size: 14px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`
export const ViewsYearContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #7e858e;
  @media screen and (max-width: 767px) {
    width: 50%;
    justify-content: space-between;
  }
`
export const Dot = styled.div`
  background-color: #7e858e;
  font-size: 5px;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  margin-left: 8px;
`
export const LinkToVideo = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
`
export const ViewsYearMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 60%;
  }
`
