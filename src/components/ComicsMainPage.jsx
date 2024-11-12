import { Outlet } from 'react-router-dom';
import ComicsHeader from './ComicsHeader';


function ComicsMainPage() {
  return (
    <>
      <ComicsHeader  />
      <Outlet />
    </>
  )
}

export default ComicsMainPage;