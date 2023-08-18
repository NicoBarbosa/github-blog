import { Link } from 'react-router-dom'
import { PostInfoContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface PostInfoProps {
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: string
}

export function PostInfo(issue: PostInfoProps) {
  return (
    <PostInfoContainer>
      <header>
        <Link to={'/'}>
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href={issue.html_url} target="_blank" rel="noreferrer">
          Ver no GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <h1>{issue.title}</h1>
      <div>
        <span>
          <FontAwesomeIcon icon={faGithub} className="fontAwesomeIcon" />
          {issue.user?.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} className="fontAwesomeIcon" />
          {issue.created_at}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
          {`${issue.comments} comentários`}
        </span>
      </div>
    </PostInfoContainer>
  )
}
