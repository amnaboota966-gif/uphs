export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
        Contact Us
      </h1>

      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        
        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2 text-gray-700">Message</label>
        <textarea
          placeholder="Write your message"
          className="w-full border p-2 rounded mb-4"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
