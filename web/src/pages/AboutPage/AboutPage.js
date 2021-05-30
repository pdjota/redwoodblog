import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
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
      <main>
        <p>
          Este sitio ha sido creado para probar mi destreza con Redwood: "¡Mirad
Mi obra, poderosos! ¡Desesperad!"
        </p>
        <Link to={routes.home()}>Regresar al inicio</Link>
      </main>
    </>
  )
}

export default AboutPage
