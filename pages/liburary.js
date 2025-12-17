import React from 'react'
export default function Library() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <main className="max-w-5xl w-full px-4 py-10">

        {/* Page Title */}
        <h1 className="text-5xl font-bold text-center text-green-500 mb-8">
          Library
        </h1>

        {/* Image Section */}
        <section className="mb-10">
          <div className="flex items-center justify-center">
              <img className="w-500 h-100" src="https://tse2.mm.bing.net/th/id/OIP.vzv2Xi-OPl6ZQ8p5WddGUgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3" alt='' />
                      </div>
          {/* 
            Image add karne ke liye:
            <img src="/library.jpg" alt="Library" className="w-full h-64 object-cover rounded-2xl shadow" />
          */}
        </section>

        {/* About Library */}
        <section className="mb-10 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            About Our Library
          </h2>
          <p className="text-gray-600">
            Our school library is a quiet place for reading and learning.
            It provides useful books for all students.
          </p>
        </section>

        {/* Books Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Available Books
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-bold">English Grammar</h3>
              <p className="text-gray-600">Author: Wren & Martin</p>
              <p className="text-sm text-blue-600">Subject: English</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-bold">Mathematics</h3>
              <p className="text-gray-600">Author: R.D. Sharma</p>
              <p className="text-sm text-blue-600">Subject: Math</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-bold">General Science</h3>
              <p className="text-gray-600">Author: John Smith</p>
              <p className="text-sm text-blue-600">Subject: Science</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-bold">Pakistan Studies</h3>
              <p className="text-gray-600">Author: A. Khan</p>
              <p className="text-sm text-blue-600">Subject: History</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-lg font-bold">Computer Basics</h3>
              <p className="text-gray-600">Author: Sara Ali</p>
              <p className="text-sm text-blue-600">Subject: Computer</p>
            </div>

          </div>
        </section>

        {/* Rules */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Library Rules
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Maintain silence.</li>
            <li>Return books on time.</li>
            <li>Handle books carefully.</li>
            <li>No food or drinks allowed.</li>
          </ul>
        </section>

      </main>

    </div>
  );
}
