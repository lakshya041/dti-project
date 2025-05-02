import React, { useState, useEffect, useRef } from "react";

export default function SettingsContent() {
  const [userData, setUserData] = useState({});
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/employee/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, []);
  useEffect(() => {
    console.log(userData)
    nameRef.current.value = userData.username;
    emailRef.current.value = userData.email;
    cityRef.current.value = userData.location;
  }
  , [userData]);

  return (
    <div className="bg-black/20 rounded-2xl p-8 space-y-10 shadow-lg text-white">
      {/* 1. Profile */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <p className="text-gray-400">Set your account details</p>
        <div className="flex items-start gap-6 flex-wrap">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 flex-1 min-w-[250px]">
            <input
              className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
              placeholder="Name"
              ref={nameRef}
            />
            <input
              className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
              placeholder="Surname"
              ref={surnameRef}
            />
            <input
              type="email"
              className="p-3 col-span-2 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          {/* Avatar */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 rounded-full bg-black/30 overflow-hidden">
              <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <button className="px-4 py-1 text-sm bg-black/30 rounded-lg hover:bg-black/40">
              Edit photo
            </button>
          </div>
        </div>
      </section>

      {/* 2. Timezone & Preferences */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Timezone & Preferences</h2>
        <p className="text-gray-400">Let us know the time zone and format</p>
        <div className="grid grid-cols-3 gap-4">
          <input
            className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
            placeholder="City"
            ref={cityRef}
          />
          <select
            className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
          >
            <option>UTC/GMT -4 hours</option>
            <option>UTC/GMT +0 hours</option>
          </select>
          <select
            className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
          >
            <option>dd/mm/yyyy 00:00</option>
            <option>mm/dd/yyyy 00:00</option>
          </select>
        </div>
      </section>

      {/* 4. Your Work */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Your work</h2>
        <p className="text-gray-400">Add info about your position</p>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
            placeholder="Function"
          />
          <input
            className="p-3 bg-black/30 rounded-xl border border-gray-700 focus:border-blue-500"
            placeholder="Job Title"
          />
        </div>
      </section>
    </div>
  );
}
