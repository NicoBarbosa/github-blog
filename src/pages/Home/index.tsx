import {
  CardsListMain,
  DataSectionProfile,
  ProfileCard,
  SearchBarContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Card } from './components/Card'
const profile = 'https://avatars.githubusercontent.com/u/66042022?v=4'

export function Home() {
  return (
    <>
      <ProfileCard>
        <img src={profile} alt="" />
        <DataSectionProfile>
          <header>
            <strong>Nicolas Penante</strong>
            <a href="#">
              GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div>
            <span>
              <FontAwesomeIcon icon={faGithub} className="iconAwesome" />
              NicoBarbosa
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} className="iconAwesome" />
              Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} className="iconAwesome" />
              32 seguidores
            </span>
          </div>
        </DataSectionProfile>
      </ProfileCard>
      <SearchBarContainer>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>
        <form>
          <input type="search" placeholder="Buscar conteúdo" />
        </form>
      </SearchBarContainer>
      <CardsListMain>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsListMain>
    </>
  )
}
