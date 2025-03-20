import { useState } from "react";

function BasicReactForm() {
  // React state for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Handle input changes (React-controlled input)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission (no page reload)
    alert(`Form Submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">React vs. HTML Forms</h2>
      
      {/* HTML Form would reload the page on submit */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Controlled Input: Username */}
        <div>
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Controlled Input: Email */}
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Controlled Input: Message (Textarea) */}
        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}


export default  BasicReactForm;