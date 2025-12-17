import Link from 'next/link';
import React from 'react'

const index = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <main className="max-w-5xl w-full px-4 py-12">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Our School
        </h1>

        {/* Tagline */}
        <p className="text-center text-gray-600 mb-10 text-lg">
          Education is the key to success
        </p>

        {/* Image Section */}
        <section className="mb-10">
          <div className="w-full h-full flex items-center justify-center">
            <img src="https://tse1.mm.bing.net/th/id/OIP.UV-QsgVp4_n0FjMrPAJJ3gHaDA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt=''/>
          </div>
         
        </section>

        {/* About School */}
        <section className="mb-10 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            <Link href="/about" >About Our School</Link> 
          </h2>
          <p className="text-gray-600">
            Our school provides quality education in a friendly environment.
            We focus on learning, discipline, and character building.
          </p>
        </section>

        {/* Features */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">Qualified Teachers</h3>
            <p className="text-gray-600">
              Experienced and trained teachers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">Library</h3>
            <p className="text-gray-600">
              A quiet place for reading and learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold mb-2">Computer Lab</h3>
            <p className="text-gray-600">
              Modern computers for students.
            </p>
          </div>

        </section>

        {/* Message */}
        <section className="bg-green-600 text-white rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Our Mission
          </h2>
          <p>
            To educate students and prepare them for a bright future.
          </p>
        </section>

      </main>

    </div>
    </div>
  )
}

export default index;