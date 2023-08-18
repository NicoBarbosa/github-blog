import { SearchBarContainer } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormIssue = zod.infer<typeof searchFormSchema>

export function SearchBar() {
  const { issues, fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit, reset } = useForm<SearchFormIssue>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: ' ',
    },
  })

  function handleFetchIssues(data: SearchFormIssue) {
    fetchIssues(data.query)
    reset()
  }
  return (
    <SearchBarContainer>
      <div>
        <strong>Publicações</strong>
        <span>{issues.length} publicações</span>
      </div>
      <form onSubmit={handleSubmit(handleFetchIssues)}>
        <input
          type="search"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchBarContainer>
  )
}
