import React from 'react'

import { BaseWrapper, ContentWrapper } from './styles'

const Base: React.FC = ({ children }) => {
  return (
    <BaseWrapper>
      <ContentWrapper>
        <h1>JobsNET</h1>
        {children}
      </ContentWrapper>
    </BaseWrapper>
  )
}

export default Base
