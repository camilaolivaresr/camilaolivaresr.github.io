import React from 'react'
import compute from './img/aws-compute.png'
import storage from './img/aws-storage.png'
// import ruby from './img/ruby.png'
import security from './img/ciberseguridad.png'

const About = () => {
  return (
    <div class="mb-5">
      <div class="d-flex justify-content-center">
        <h2 >Habilidades</h2>
      </div>
      <div class="row">
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class=" fa-stack-2x fa-inverse"></i>
              <i class="fa fab fa-html5 fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Front-End development</h5>
            <p class="card-text">HTML5, CSS3, Javascript.</p>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class=" fa-stack-2x fa-inverse"></i>
              <i class="fa fa-cogs fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Javascript Frameworks</h5>
            <p class="card-text">React, Angular.</p>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class="fa-stack-2x fa-inverse"></i>
              <i class="fab fa-wordpress fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">CMS</h5>
            <p class="card-text">WordPress.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              {/* <i class="fa fa-square fa-stack-2x "></i> */}
              <i class="fa fa-terminal fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Terminal</h5>
            <p class="card-text">Bash.</p>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class="fa fab fa-git fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2"> Control de versiones</h5>
            <p class="card-text">Git.</p>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class=" fa-stack-2x fa-inverse"></i>
              <i class="fa fa-cube fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Full-Stack Development</h5>
            <p class="card-text">Ruby (Ruby on Rails), Javascript.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class="fa-stack-2x fa-inverse"></i>
              <i class="fa fa-cubes fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Arquitectura MVC</h5>
            <p class="card-text">Ruby on Rails.</p>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class=" fa-stack-2x fa-inverse"></i>
              <i class="fa fa-database fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Databases</h5>
            <p class="card-text">PostgreSQL, SQLite, MongoDB.</p>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-4x">
              <i class="fa fa-stack-2x fa-inverse"></i>
              <i class="fa fa-cloud fa-stack-1x "></i>
            </span>
            <h5 class="card-title mt-2">Cloud Deployment</h5>
            <p class="card-text">Aws, Firebase, Render.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-5x">
              <img class="fa  fa-stack-2x fa-inverse" src={compute} alt="..." />
            </span>
          </div>
        </div>
        <div class="col-md-4 p-2" >
          <div class="text-center h-100">
            <span class="fa-stack fa-5x">
              <img class="fa fa-stack-2x fa-inverse" src={storage} alt="..." />
            </span>
          </div>
        </div>
        {/* <div class="p-2" >
          <div class="text-center" style={{ width: "20rem"}}>
          <span class="fa-stack fa-6x">
            <img class="fa fa-circle fa-stack-2x fa-inverse"src={ruby}  alt="..." />
            </span> 
          </div>
        </div> */}
     
        <div class="col-md-4 p-2 " >
          <div class="text-center h-100">
            <span class="fa-stack fa-5x">
              <img class="fa  fa-stack-2x fa-inverse" src={security} alt="..." />
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About