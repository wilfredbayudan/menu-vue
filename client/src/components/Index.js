import { Outlet } from "react-router-dom"
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const MainContent = styled.main`
  flex: 1 0 auto;
  margin-top: 60px;
`

const Index = () => {

  return (
    <>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </>
  )

}

export default Index;