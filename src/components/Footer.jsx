import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="mx-auto " id="footer">
        <span>© 2024 HandMade CamiDev  </span>
        <ul>
          <li class="social-icons">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="https://es.react.dev/"
              role="button"
              target="_blank"
            ><i class="fa-footer fab fa-react"></i>
            </a>
          </li>
          <li class="list-inline-item">
              <a
                data-mdb-ripple-init
                class="btn btn-link btn-floating btn-lg text-body "
                href="mailto:camila.desarrolloweb@gmail.com"
                role="button"
                data-mdb-ripple-color="dark"
                target="_blank"
                rel="noopener noreferrer"
              ><i class="fa fa-envelope"></i
              ></a>
            </li>
          <li class="social-icons">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="https://www.linkedin.com/in/camilaolivaresrivera/"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            ><i class="fa-footer fab fa-linkedin"></i>
            </a>
          </li>
          <li class="social-icons">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="https://github.com/camilaOlivaresR"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            ><i class="fa-footer fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer