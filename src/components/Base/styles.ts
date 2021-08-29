import styled from 'styled-components'

import background from '../../assets/pexels-photo-4344860.jpeg'

export const BaseWrapper = styled.div`
  min-height: 100vh;
`

export const ChildrenWrapper = styled.div`
  padding: 20px;
`

export const ContentWrapper = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  > h1 {
    color: darkgray;
    text-align: center;
  }
`
