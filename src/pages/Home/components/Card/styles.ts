import styled from 'styled-components'

export const CardContainer = styled.a`
  background: ${(props) => props.theme['base-post']};
  border-radius: 0.625rem;
  border: 2px solid transparent;
  padding: 2rem;
  line-height: 160%;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: border 0.2s ease-in-out;
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    max-width: 17.68rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  p {
    width: 100%;
    max-width: 22rem;
    height: 100%;
    max-height: 112px;
    overflow: hidden;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
  }
`
