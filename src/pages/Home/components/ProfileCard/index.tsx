import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer, DataSectionProfile } from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContext } from 'react'

export function ProfileCard() {
  const { profile } = useContext(IssuesContext)

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt={'Foto de' + profile.name} />
      <DataSectionProfile>
        <header>
          <strong>{profile.name}</strong>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{profile.bio}</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} className="iconAwesome" />
            {profile.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} className="iconAwesome" />
            {profile.company != null ? profile.company : 'Sem empresa'}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} className="iconAwesome" />
            {profile.followers}{' '}
            {profile.followers < 2 ? 'seguidor' : 'seguidores'}
          </span>
        </div>
      </DataSectionProfile>
    </ProfileContainer>
  )
}
