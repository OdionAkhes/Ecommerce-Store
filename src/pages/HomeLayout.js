import React from 'react'
import { Outlet } from 'react-router-dom'
const HomeLayout = () => {
  return (
    <nav>
      <span className="text-4xl text-primary" >Style Loft</span>
      <section className="align-element">
        <Outlet/>
</section>
</nav>
  )
}

export default HomeLayout