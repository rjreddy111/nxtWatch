import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 70%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const BannerMainContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  display: ${props => props.bannerDisplay};
  justify-content: space-between;
  width: 100%;
  padding: 25px;
`

export const BannerLEftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerImage = styled.img`
  width: 100px;
`
export const Bannerbutton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  padding: 5px;
  width: 100px;
  margin-top: 20px;

  color: #212121;
`
export const DisplayListContainer = styled.div`
  padding: 25px;
  color: ${props => props.color};
`
export const SearchContainer = styled.div`
  width: 60%;
  display: flex;
  color: ${props => props.color};
`
export const Searchbar = styled.input`
  width: 80%;
  padding-left: 20px;
  background-color: #ffffff;
  border: 1px solid #909090;
`
export const SearchIconContainer = styled.button`
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  text-align: center;
  padding: 5px;
  border: 1px solid #909090;
`
export const AllHomeVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`

export const BennerRIghtSideContainer = styled.button`
  background-color: transparent;
  border-width: 0px;
  align-self: flex-start;
  justify-self: flex-end;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`
