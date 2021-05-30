import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>Acerca de</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>Inicio</main>
    </>
  )
}

export default HomePage
