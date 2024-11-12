import { Outlet } from 'react-router-dom';
import Header from './Header'


function Page() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Page;