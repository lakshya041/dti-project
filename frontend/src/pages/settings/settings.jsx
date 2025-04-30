import React, { useState, useEffect } from "react";

export default function SettingsContent() {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    city: "",
    timezone: "UTC/GMT +0 hours",
    dateFormat: "dd/mm/yyyy 00:00",
    function: "",
    jobTitle: "",
    image: "",
  });


  useEffect(() => {
    // Fetch user data from the backend
    async function fetchUserData() {
      try {
        const response = await fetch("http://localhost:3000/api/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"), // Include token if required
          },
        });
        const data = await response.json();
        if (data.message == "Profile data fetched successfully") {
          setUserData({
            name: data.data.userName ,
            surname: data.surname || "",
            email: data.data.email || "",
            image: data.data.image || "",
          });
        } else {
          console.error("Failed to fetch user data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="bg-gray-800 rounded-2xl p-8 space-y-10 shadow-lg">
      {/* 1. Profile */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Profile</h2>
        <p className="text-gray-400">Set your account details</p>

        <div className="flex items-start gap-6">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <input
              className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              placeholder="Name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
            <input
              className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              placeholder="Surname"
              value={userData.lname}
              onChange={(e) =>
                setUserData({ ...userData, surname: e.target.value })
              }
            />
            <input
              type="email"
              className="p-3 col-span-2 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              placeholder="Email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>

          {/* Avatar */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden">
              <img
                src={userData.image}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="px-4 py-1 text-sm bg-gray-700 rounded-lg hover:bg-gray-600">
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
            className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
            placeholder="City"
            value={userData.city}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          />
          <select
            className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
            value={userData.timezone}
            onChange={(e) =>
              setUserData({ ...userData, timezone: e.target.value })
            }
          >
            <option>UTC/GMT -4 hours</option>
            <option>UTC/GMT +0 hours</option>
          </select>
          <select
            className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
            value={userData.dateFormat}
            onChange={(e) =>
              setUserData({ ...userData, dateFormat: e.target.value })
            }
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
            className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
            placeholder="Function"
            value={userData.function}
            onChange={(e) =>
              setUserData({ ...userData, function: e.target.value })
            }
          />
          <input
            className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
            placeholder="Job Title"
            value={userData.jobTitle}
            onChange={(e) =>
              setUserData({ ...userData, jobTitle: e.target.value })
            }
          />
        </div>
      </section>
    </div>
  );
}