export default function RegistrationForm() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 to-orange-400">
        <div className="bg-orange-50 p-8 rounded-lg shadow-lg w-full max-w-4xl">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-6">Registration</h2>
  
          {/* Personal Details */}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <InputField label="Full Name" placeholder="Enter your name" />
            <InputField label="Date of Birth" placeholder="Enter birth date" />
            <InputField label="Email" placeholder="Enter your email" />
            <InputField label="Mobile Number" placeholder="Enter mobile number" />
            <InputField label="Gender" placeholder="Enter your gender" />
            <InputField label="Occupation" placeholder="Enter occupation" />
          </div>
  
          {/* Identity Details */}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Identity Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <InputField label="ID Type" placeholder="Enter ID type" />
            <InputField label="ID Number" placeholder="Enter ID number" />
            <InputField label="Issue Authority" placeholder="Enter issue department" />
            <InputField label="Issue Date" placeholder="Enter ID issue date" />
            <InputField label="Issue State" placeholder="Enter ID issue state" />
            <InputField label="Expiry Date" placeholder="Enter ID expiry date" />
          </div>
  
          {/* Submit Button */}
          <div className="flex justify-start">
            <button className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
              Next → 
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Reusable Input Component
  function InputField({ label, placeholder }) {
    return (
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-1">{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  }
  