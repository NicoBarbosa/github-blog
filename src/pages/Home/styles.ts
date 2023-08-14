import styled from 'styled-components'

export const ProfileCard = styled.section`
  display: flex;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 4.5rem;

  > img {
    max-width: 9.25rem;
    max-height: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const DataSectionProfile = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    strong {
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 130%;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      height: 19px;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      font-weight: 700;
      line-height: 160%;
      font-size: 0.75rem;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border-bottom 0.2s ease-in-out;
      }

      &:focus {
        display: none;
      }
    }
  }

  p {
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
    flex-grow: 1;
    max-height: 5.45625rem;
  }

  div {
    display: flex;
    gap: 1.5rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .iconAwesome {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

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
