import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-500">
          About Our School
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Learn More About Our School, Teachers & Values
        </p>
      </div>

      {/* Introduction Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our school is one of the best educational institutions in our area.
          We provide quality education to students from primary to secondary
          level. Our aim is to build a strong foundation of knowledge, discipline,
          and moral values in every student.  
          <br /><br />
          We believe that education is not only about books, but also about
          character building, confidence, and creativity.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide a safe, supportive, and inspiring learning
            environment where students can grow academically and socially.
            We focus on developing critical thinking, problem-solving skills,
            and good manners in students.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to become a leading school that prepares students
            for future challenges. We want our students to become responsible
            citizens, successful professionals, and good human beings.
          </p>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">
          Our Teachers
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our teachers are highly qualified, experienced, and dedicated.
          They use modern teaching methods to make learning easy and interesting.
          Teachers guide students not only in studies but also in personal growth.
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>Qualified and trained staff</li>
          <li>Friendly and supportive teachers</li>
          <li>Focus on individual student attention</li>
          <li>Regular tests and assessments</li>
        </ul>
      </section>

      {/* Facilities Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">
          Our Facilities
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We provide modern facilities to ensure a comfortable and effective
          learning environment for students.
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>✔ Spacious Classrooms</div>
          <div>✔ Science & Computer Labs</div>
          <div>✔ Library with Educational Books</div>
          <div>✔ Sports Ground & Activities</div>
          <div>✔ Clean Drinking Water</div>
          <div>✔ Safe & Secure Environment</div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-green-500 mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We believe in honesty, respect, discipline, and hard work.
          These values help students become confident and responsible individuals.
        </p>
      </section>

      {/* Conclusion */}
      <section className="bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-3">
          Conclusion
        </h2>
        <p className="leading-relaxed">
          Our school is not just a place to study, but a place to grow and succeed.
          We are proud of our students and staff who work together to create
          a bright future.
        </p>
      </section>
    </div>
  );
}
