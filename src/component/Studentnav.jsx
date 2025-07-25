import React from 'react'
import { Link } from 'react-router'

const Studentnav = () => {
  return (
    <div>
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Addstudent</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/search">Searchstudent</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Deletestudent</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">Viewallstudent</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Studentnav