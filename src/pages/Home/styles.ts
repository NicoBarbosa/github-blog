import styled from 'styled-components'

export const SearchBarContainer = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    line-height: 160%;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 3rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const CardsListMain = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
