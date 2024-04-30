import styled from 'styled-components'

export const VideoDetailsMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const VideoDetailsCOntainer = styled.div`
  width: 65%;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4f46e5;
  width: 120px;
  height: 35px;
  color: #ffffff;

  border-radius: 7px;
  border-width: 0px;
`
export const FailureImage = styled.img`
  width: 75%;
`
