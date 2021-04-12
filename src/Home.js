import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/datepicker">Datepicker component</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets page</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;