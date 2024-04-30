import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedList = styled.li`
  width: 90%;
  list-style-type: none;
  display: flex;
  margin-bottom: 25px;
  background-color: ${props => props.bgColor};
  height: 180px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Heading = styled.h1`
  font-size: 22px;
`
export const ParagraphContent = styled.p`
  color: #7e858e;
  font-size: 14px;
`

export const ViewsYearContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #7e858e;
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
`
export const ThumbnailImage = styled.img`
  width: 45%;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const LinkToVideo = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`
