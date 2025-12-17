import Image from "next/image";

export default function ComputerLab() {
  const labData = [
    {
      id: 1,
      title: "Modern Computers",
      desc: "Our computer lab is equipped with modern and fast computers for students to practice.",
      extra: "The lab has Intel i5/i7 processors, 16GB RAM, and SSD storage for smooth performance.",
      img: "/lab1.jpg",
    },
    {
      id: 2,
      title: "Learning Environment",
      desc: "A clean and peaceful environment to help students focus on their studies.",
      extra: "Ergonomic chairs, bright lighting, and air conditioning make it comfortable for long hours.",
      img: "/lab2.jpg",
    },
    {
      id: 3,
      title: "Practical Work",
      desc: "Students practice programming and IT-related skills in a hands-on way.",
      extra: "Workshops on coding, networking, and robotics are conducted for real-world experience.",
      img: "/lab3.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-12">
      {/* Big Responsive Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
          COMPUTER LAB
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Explore our modern facilities and hands-on learning opportunities for students.
        </p>
      </header>

      {/* Lab Cards */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {labData.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 text-center">
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={250}
              className="rounded-xl object-cover h-60 w-full"
            />

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{item.title}</h2>

            {/* Short Description */}
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

            {/* Extra Info */}
            <p className="text-gray-500 text-xs mt-2">{item.extra}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
