import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NotFoundContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NotFoundImage = styled.img`
  width: 65%;
`

export const Heading = styled.h1`
  font-size: 24px;
  color: ${props => props.color};
`
export const Description = styled.p`
  color: #7e858e;
`
