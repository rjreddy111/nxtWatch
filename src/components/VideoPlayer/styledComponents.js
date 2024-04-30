import styled from 'styled-components'

export const VideoPlayerContainer = styled.div`
  padding: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const VideoTitle = styled.p`
  color: black;
`
export const VideoCountAndYear = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  color: #7e858e;
  font-size: 14px;
`
export const ButtonsMainContainer = styled.div`
  width: 35%;
  display: flex;
  color: #7e858e;
`
export const ButtonContainer = styled.div`
  display: flex;
`
export const IconsContainer = styled.button`
  display: flex;
  align-items: center;
  margin-right: 15px;
  color: ${props => props.color};
  border-width: 0px;
  background-color: transparent;
`
export const ViewsButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7e858e;
  align-items: center;
  font-size: 14px;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    padding-left: 0px;
  }
`

export const BottomContainer = styled.div`
  display: flex;
`
export const ProileImage = styled.img`
  width: 50px;
  align-self: flex-start;
  margin-top: 15px;
  margin-right: 15px;
`
export const Subscribers = styled.p`
  color: #7e858e;
  font-size: 13px;
`
export const Description = styled.p`
  color: #7e858e;
  font-size: 14px;
`
export const ReactPlayerContainer = styled.div`
  width: 100;
`
export const HorizontalLine = styled.hr`
  width: 100%;
`
