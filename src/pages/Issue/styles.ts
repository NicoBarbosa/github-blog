import styled from 'styled-components'

export const PostInfo = styled.section`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme.blue};
      max-height: 1.1875rem;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border-bottom 0.2s ease-in-out;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${(props) => props.theme['base-span']};
    line-height: 160%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .fontAwesomeIcon {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const PostContent = styled.section`
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  div {
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  h2 {
    color: ${(props) => props.theme.blue};
    font-size: 1rem;
    font-weight: 400;
    text-decoration: underline;
  }

  pre {
    width: 100%;
    padding: 1rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 0.125rem;
  }
`
