import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostContent, PostInfo } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Issue() {
  return (
    <>
      <PostInfo>
        <header>
          <a href="#">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="#">
            Ver no GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h1>JavaScript data types and data structures</h1>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} className="fontAwesomeIcon" />
            NicoBarbosa
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} className="fontAwesomeIcon" />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" /> 5
            comentários
          </span>
        </div>
      </PostInfo>
      <PostContent>
        <div>
          <p>
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </p>
          <h2>Dynamic typing</h2>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
        </div>
        <pre>
          let foo = 42; // foo is now a number
          <br />
          foo = &apos;bar&apos;; // foo is now a string
          <br />
          foo = true; // foo is now a boolean
        </pre>
      </PostContent>
    </>
  )
}
