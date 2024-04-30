import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameListItem = styled.li`
  width: 95%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-bottom: 20px;
`
export const ImageDisplay = styled.img`
  width: 95%;
`
export const Heading = styled.p`
  font-size: 16px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  color: ${props => props.color};
`

export const Paragraph = styled.p`
  font-size: 13px;
  color: #7e858e;
  padding-top: 0px;
`
export const LinkToVideo = styled(Link)`
  width: 33%;
  text-decoration: none;
  color: ${props => props.color};
`
