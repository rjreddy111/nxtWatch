import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const GamingContainer = styled.div`
  width: 70%;
  margin-top: 60px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0px;
  }
`
export const TopBannerContainer = styled.div`
  background-color: #f1f5f9;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
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
export const GamingListContainer = styled.div`
  background-color: #f8fafc;
  padding: 25px;
  background-color: ${props => props.bgColor};
`
export const GamingUnorderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 75%;
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

export const Heading = styled.h1`
  font-size: 25px;
  color: ${props => props.color};
`
