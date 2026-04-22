"use client";

import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex bg-[#0d0b1e]">

      {/* ── Left Panel ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80')`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0b1e]/90 via-[#1a1040]/70 to-[#2d1b69]/60" />
        {/* Radial glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white font-black text-2xl tracking-widest font-mono">
              AMU
            </span>
          </div>

          {/* Tagline */}
          <div>
            <h2 className="text-white text-4xl font-light leading-snug tracking-tight">
              Capturing <span className="font-semibold text-purple-300">Moments,</span>
              <br />
              Creating <span className="font-semibold text-purple-300">Memories.</span>
            </h2>
            <p className="mt-4 text-purple-200/60 text-sm">
              Sign in to continue your journey.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="flex lg:hidden justify-center mb-8">
            <span className="text-white font-black text-2xl tracking-widest font-mono">AMU</span>
          </div>

          {/* Header */}
          <h1 className="text-white text-3xl font-semibold mb-1">Welcome back</h1>
          <p className="text-purple-300/70 text-sm mb-8">
            Don't have an account?{" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">
              Sign up
            </a>
          </p>

          {/* Form */}
          <div className="space-y-4">

            {/* Email */}
            <div>
              <label className="block text-purple-200/80 text-xs font-medium mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-purple-500/70 focus:bg-white/8 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-purple-200/80 text-xs font-medium uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-purple-400/80 text-xs hover:text-purple-300 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-purple-500/70 focus:bg-white/8 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors p-1"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L3 3m7.88 7.88l4.242 4.242M21 21l-6.12-6.12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-4 h-4 rounded bg-white/5 border border-white/20 peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-all" />
                <svg className="absolute inset-0 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-purple-200/60 text-xs group-hover:text-purple-200/80 transition-colors">
                I agree to the{" "}
                <a href="#" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  Terms &amp; Conditions
                </a>
              </span>
            </label>

            {/* Submit */}
            <button
              type="button"
              className="w-full mt-2 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-purple-900/50 hover:shadow-purple-700/40"
            >
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs">or sign in with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-3 text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"/>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"/>
                <path fill="#4A90D9" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"/>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"/>
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl py-3 text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              Apple
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}