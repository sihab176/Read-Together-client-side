import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaSearch,
  FaCommentDots,
  FaRegBell,
  FaCamera,
  FaPencilAlt,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

// Fake data based on the image
const initialData = {
  profile: {
    name: "Natashia Khaleira",
    role: "Admin",
    location: "Leeds, United Kingdom",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", // Placeholder avatar
  },
  personalInfo: {
    firstName: "Natashia",
    lastName: "Khaleira",
    dob: "12-10-1990",
    email: "info@binary-fusion.com",
    phone: "(+62) 821 2554 5846",
    userRole: "Admin",
  },
  address: {
    country: "United Kingdom",
    city: "Leeds, East London",
    postalCode: "ERT 1254",
  },
};

// Component structure
const ProfilePage = () => {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [personalData, setPersonalData] = useState(initialData.personalInfo);
  const [addressData, setAddressData] = useState(initialData.address);

  // React Hook Form setups
  const {
    register: registerPersonal,
    handleSubmit: handleSubmitPersonal,
    reset: resetPersonal,
  } = useForm({
    defaultValues: personalData,
  });

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    reset: resetAddress,
  } = useForm({
    defaultValues: addressData,
  });

  const onSubmitPersonal = (data) => {
    setPersonalData(data);
    setIsEditingPersonal(false);
  };

  const onSubmitAddress = (data) => {
    setAddressData(data);
    setIsEditingAddress(false);
  };

  const cancelPersonalEdit = () => {
    resetPersonal(personalData);
    setIsEditingPersonal(false);
  };

  const cancelAddressEdit = () => {
    resetAddress(addressData);
    setIsEditingAddress(false);
  };

  // Common styles to reuse
  const cardClass =
    "bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-6";
  const labelClass = "text-xs md:text-sm font-medium text-gray-400 mb-1";
  const valueClass =
    "text-sm md:text-base font-semibold text-gray-900 break-all";
  const inputClass =
    "w-full text-sm md:text-base font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-green-700";

  return (
    <div className="bg-[#f0f4f3] min-h-screen text-[#1d352c] font-sans">
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-[#124d3a] mb-6">My Profile</h1>

        {/* Profile Card */}
        <section
          className={`${cardClass} flex flex-col md:flex-row items-center gap-6`}
        >
          <div className="relative">
            <img
              src={initialData.profile.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md text-green-700 hover:text-green-800 border border-gray-200">
              <FaCamera size={16} />
            </button>
          </div>

          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl font-bold text-[#124d3a]">
              {initialData.profile.name}
            </h2>
            <p className="text-sm font-medium text-gray-500">
              {initialData.profile.role}
            </p>
            <p className="text-sm text-gray-400">
              {initialData.profile.location}
            </p>
          </div>
        </section>

        {/* Personal Information */}
        <section className={cardClass}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-[#124d3a]">
              Personal Information
            </h3>

            {isEditingPersonal ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={cancelPersonalEdit}
                  className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-gray-300 transition text-sm font-medium"
                >
                  <FaTimes size={12} />
                  Cancel
                </button>
                <button
                  form="personalForm"
                  type="submit"
                  className="bg-green-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-green-800 transition text-sm font-medium"
                >
                  <FaCheck size={12} />
                  Save
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingPersonal(true)}
                className="bg-orange-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-orange-600 transition text-sm font-medium"
              >
                <FaPencilAlt size={12} />
                Edit
              </button>
            )}
          </div>

          <form
            id="personalForm"
            onSubmit={handleSubmitPersonal(onSubmitPersonal)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-8">
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Date of Birth", name: "dob" },
                { label: "Email Address", name: "email" },
                { label: "Phone Number", name: "phone" },
                { label: "User Role", name: "userRole" },
              ].map((field) => (
                <div key={field.name}>
                  <p className={labelClass}>{field.label}</p>
                  {isEditingPersonal ? (
                    <input
                      {...registerPersonal(field.name)}
                      className={inputClass}
                    />
                  ) : (
                    <p className={valueClass}>{personalData[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </form>
        </section>

        {/* Address */}
        <section className={cardClass}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-[#124d3a]">Address</h3>

            {isEditingAddress ? (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={cancelAddressEdit}
                  className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-gray-300 transition text-sm font-medium"
                >
                  <FaTimes size={12} />
                  Cancel
                </button>
                <button
                  form="addressForm"
                  type="submit"
                  className="bg-green-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-green-800 transition text-sm font-medium"
                >
                  <FaCheck size={12} />
                  Save
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingAddress(true)}
                className="bg-gray-100 text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-gray-200 transition text-sm font-medium"
              >
                <FaPencilAlt size={12} className="opacity-50" />
                Edit
              </button>
            )}
          </div>

          <form
            id="addressForm"
            onSubmit={handleSubmitAddress(onSubmitAddress)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-8">
              {[
                { label: "Country", name: "country" },
                { label: "City", name: "city" },
                { label: "Postal Code", name: "postalCode" },
              ].map((field) => (
                <div key={field.name}>
                  <p className={labelClass}>{field.label}</p>
                  {isEditingAddress ? (
                    <input
                      {...registerAddress(field.name)}
                      className={inputClass}
                    />
                  ) : (
                    <p className={valueClass}>{addressData[field.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
