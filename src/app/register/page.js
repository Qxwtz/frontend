"use client";

import React, { useState } from "react";

export default function Register() {
  const initialFormState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.firstname ||
      !form.lastname ||
      !form.username ||
      !form.password
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    setLoading(true);

    try {
      console.log(form);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("สมัครสมาชิกสำเร็จ 🌸");
      setForm(initialFormState);
    } catch (error) {
      console.error(error);
      alert("เกิดข้อผิดพลาด");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-violet-100 to-sky-100 flex items-center justify-center px-4 py-10">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-300/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-300/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Card */}
      <div className="relative w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-violet-400 text-4xl shadow-lg shadow-pink-200">
            🌸
          </div>

          <h1 className="mt-5 text-4xl font-bold text-pink-600">
            Create Account
          </h1>

          <p className="mt-2 text-gray-600">
            สมัครสมาชิกเพื่อเริ่มต้นใช้งานเว็บไซต์
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Firstname / Lastname */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                ชื่อ
              </label>

              <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="ขวัญใจ"
                required
                className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-200"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                นามสกุล
              </label>

              <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="ความดีเลิศ"
                required
                className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-200"
              />
            </div>

          </div>

          {/* Username */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="khawnjai2244"
              required
              className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-200"
            />

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-200"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3 text-white font-semibold transition-all duration-300 ${
              loading
                ? "bg-pink-300 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 hover:scale-105 hover:shadow-xl hover:shadow-pink-300 active:scale-95"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">

                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z"
                  />
                </svg>

                กำลังสมัครสมาชิก...
              </div>
            ) : (
              "💖 สมัครสมาชิก"
            )}
          </button>

        </form>

        {/* Footer */}
        <div className="mt-8 border-t border-pink-200 pt-6 text-center">

          <p className="text-gray-500">
            มีบัญชีอยู่แล้ว?
            <span className="ml-2 cursor-pointer font-semibold text-pink-500 hover:text-pink-700 transition">
              เข้าสู่ระบบ
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}