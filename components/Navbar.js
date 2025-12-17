import React from 'react'

const Navbar = () => {
  return (
    <div><header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className="w-18 h-18 rounded-full" src="logo.png" alt='Universal school'/>
      <span className="ml-3 text-3xl text-green-600">Universal Public High School</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900 text-xl" href='/'>Home</a>
      <a className="mr-5 hover:text-gray-900 text-xl" href='/about'>About</a>
      <a className="mr-5 hover:text-gray-900 text-xl" href='/contactus'>Contactus</a>
      <a className="mr-5 hover:text-gray-900 text-xl" href='/liburary'>Liburary</a>
      <a className="mr-5 hover:text-gray-900 text-xl" href='/students'>Students</a>
      <a className="mr-5 hover:text-gray-900 text-xl" href='/computerlab'>Computerlab</a>
    </nav>
  </div>
</header>
</div>
  )
}

export default Navbar