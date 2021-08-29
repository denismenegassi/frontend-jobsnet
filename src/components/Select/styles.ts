import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-top: 8px;
    color: #fff;
    width: max-content;
  }

  > select {
    margin-top: 4px;
    height: 32px;
    border: 1px solid #fff;
    padding-left: 16px;
  }
`
