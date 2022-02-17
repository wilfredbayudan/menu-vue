import { Outlet } from "react-router-dom"

const Index = () => {

  return (
    <div>
      <div>Header</div>
      <div><Outlet /></div>
      <div>Footer</div>
    </div>
  )

}

export default Index;