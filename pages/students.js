"use client";
import React, { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", grade: "" });
  const [editIndex, setEditIndex] = useState(null);

  // 🔹 Load students from localStorage on page load
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // 🔹 Save students to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update Student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.grade) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = form;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, form]);
    }

    setForm({ name: "", age: "", grade: "" });
  };

  // Edit student
  const handleEdit = (index) => {
    setForm(students[index]);
    setEditIndex(index);
  };

  // Delete student
  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this student?")) {
      const updated = students.filter((_, i) => i !== index);
      setStudents(updated);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Student Admission System
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-green p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editIndex !== null ? "Edit Student" : "New Admission"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          name="grade"
          placeholder="Class / Grade"
          value={form.grade}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          {editIndex !== null ? "Update Student" : "Add Student"}
        </button>
      </form>

      {/* Student List */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Student List</h2>

        {students.length === 0 ? (
          <p className="text-gray-600">No students found</p>
        ) : (
          <table className="w-full bg-white shadow-md rounded">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Age</th>
                <th className="p-2">Class</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-b text-center">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.age}</td>
                  <td className="p-2">{s.grade}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(i)}
                      className="bg-green-400 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
