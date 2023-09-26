import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Hero, Navbar } from '../components'
const HomeLayout = () => {
  return (
    <nav>
      <Header />
      <Navbar />
      <Hero/>
      <section className="align-element">
        <Outlet/>
</section>
</nav>
  )
}

export default HomeLayout