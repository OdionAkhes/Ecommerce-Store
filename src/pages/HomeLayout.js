import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from '../components'
const HomeLayout = () => {
  return (
    <nav>
      <Header />
      <Navbar/>
      <section className="align-element">
        <Outlet/>
</section>
</nav>
  )
}

export default HomeLayout