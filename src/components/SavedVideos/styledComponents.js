import styled from 'styled-components'

export const SaveVideosMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const SavedContainer = styled.div`
  width: 70%;
  background-color: ${props => props.bgColor};
  min-height: 95vh;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`
export const TopBannerContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 25px;
  color: ${props => props.color};
`
export const IconContainer = styled.div`
  background-color: #e2e8f0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SavedListContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 25px;
`

export const NoSavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NosaveImage = styled.img`
  width: 75%;
`

export const Paratext = styled.p`
  color: ${props => props.color};
  font-size: 17px;
`
