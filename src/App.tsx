import Layout from './components/ui/layout'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Tickets from './pages/ticktes/tickets';
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <div className="p-4 sm:ml-64">
        <div className='mt-14 p-4'>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/tickets"}>
            <Tickets />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App


function Home() {
  return <h2>Home</h2>;
}

