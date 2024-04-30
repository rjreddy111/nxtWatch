import styled from 'styled-components'

export const EachVideoList = styled.li`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
export const EachListContents = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 7px;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 40px;
  margin-right: 5px;
  margin-top: 20px;
`

export const TextContent = styled.p`
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
