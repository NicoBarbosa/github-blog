import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import cover from './../../assets/cover.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={cover} alt="Background Cover Image" />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}
