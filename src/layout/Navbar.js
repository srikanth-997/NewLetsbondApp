import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
<nav class="navbar bg-dark sticky" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white h4 ">Let's Bond  <img src="https://static.vecteezy.com/system/resources/previews/004/180/845/original/blow-bubbles-together-black-glyph-icon-outdoor-activity-for-kid-parent-child-bond-spending-time-at-park-stress-relieving-activity-silhouette-symbol-on-white-space-isolated-illustration-vector.jpg"
                width="80" height="40" alt="" class="rounded-circle " /></a>
     <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
