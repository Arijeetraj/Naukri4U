import React, { useState } from 'react';
import jsPDF from 'jspdf';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownload = () => {
    // Logic to download the resume as PDF
    const doc = new jsPDF();
    doc.text("Resume", 10, 10);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Email: ${formData.email}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text(`Education: ${formData.education}`, 10, 50);
    doc.text(`Experience: ${formData.experience}`, 10, 60);
    doc.save("resume.pdf");
  };

  return (
    <div className="container mx-auto p-4">
      <form className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="border p-2"
        ></textarea>
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="border p-2"
        ></textarea>
        <button type="button" onClick={handleDownload} className="bg-blue-500 text-white p-2">
          Download Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeBuilder;
