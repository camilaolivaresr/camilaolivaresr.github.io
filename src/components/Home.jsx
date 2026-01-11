import React from 'react'
import cara from './img/cara.jpeg'


const Home = () => {
  return (
    <>
      <div class="d-flex justify-content-center mb-4">
        <img src={cara} class="rounded-circle mx-auto d-block" id='responsive' alt="..." />
      </div>
      <div id='parrafo'>
        <p>
          Hola! Soy desarrolladora Full-Stack en <a>JavaScript - Ruby</a>. Creo sitios web y hago cosas relacionadas con Internet, tengo experiencia en la creación de sistemas y aplicaciones web responsivas, diseño y creo todo de principio a fin .
        </p>
        <p>
          Actualmente trabajo de manera <a>Freelance</a> y ocasionalmente estoy disponible para proyectos con un fuerte énfasis en la accesibilidad, la equidad de género, la interseccionalidad, la justicia social y las artes.
        </p>
        <p>
          Entusiasta por aprender nuevas herramientas para crecer en el campo TI . Motivada por contribuir al éxito del equipo a través del trabajo proactivo, agilidad y buena comunicación. Voluntaria ocasional educando y acompañando a niñas en el descubrimiento de la programación .
        </p>
      </div>


    </>
  )
}

export default Home