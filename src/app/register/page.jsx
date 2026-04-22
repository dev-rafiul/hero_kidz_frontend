"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address.";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const passwordStrength = () => {
    const p = formData.password;
    if (!p) return { level: 0, label: "", color: "" };
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (score <= 1) return { level: 1, label: "Weak", color: "bg-red-500" };
    if (score === 2) return { level: 2, label: "Fair", color: "bg-amber-400" };
    if (score === 3) return { level: 3, label: "Good", color: "bg-emerald-400" };
    return { level: 4, label: "Strong", color: "bg-emerald-500" };
  };

  const strength = passwordStrength();

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
        <div className="text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Account Created
          </h2>
          <p className="text-zinc-400 mb-8">Welcome aboard, {formData.fullName.split(" ")[0]}. Your journey begins now.</p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ fullName: "", email: "", password: "", confirmPassword: "" }); }}
            className="text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
          >
            Back to Register
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Left Decorative Panel */}
      <div className="hidden lg:flex w-[46%] relative overflow-hidden flex-col justify-between p-14">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#a0a0b0 1px, transparent 1px), linear-gradient(90deg, #a0a0b0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Geometric Accents */}
        <div className="absolute top-24 left-16 w-64 h-64 rounded-full border border-indigo-500/20" />
        <div className="absolute top-32 left-24 w-44 h-44 rounded-full border border-cyan-400/15" />
        <div className="absolute bottom-32 right-8 w-80 h-80 rounded-full border border-violet-500/10" />
        <div className="absolute bottom-40 right-16 w-52 h-52 rounded-full border border-indigo-400/15" />
        {/* Diagonal bar accent */}
        <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent" />

        {/* Logo */}
        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </div>
            <span className="text-white font-semibold tracking-widest text-sm uppercase">Nexus</span>
          </div>
        </div>

        {/* Headline */}
        <div className="relative">
          <p className="text-xs tracking-[0.25em] text-indigo-400 uppercase mb-5 font-medium">Begin your story</p>
          <h1
            className="text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Create your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              account
            </span>
            <br />
            today.
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed max-w-xs">
            Join thousands of creators and builders who trust Nexus to power their next big idea.
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative border-l-2 border-indigo-500/40 pl-5">
          <p className="text-zinc-300 text-sm leading-relaxed italic mb-3">
            "The onboarding was seamless. Within minutes I had everything I needed to get started."
          </p>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <div>
              <p className="text-white text-xs font-medium">Sarah Chen</p>
              <p className="text-zinc-500 text-xs">Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-16 relative">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-10 lg:hidden">
            <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-md" />
            <span className="text-white font-semibold tracking-widest text-sm uppercase">Nexus</span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get started
            </h2>
            <p className="text-zinc-500 text-sm">
              Already have an account?{" "}
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                Sign in
              </a>
            </p>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {["Google", "GitHub"].map((provider) => (
              <button
                key={provider}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:border-zinc-700 hover:bg-zinc-800/50 hover:text-white transition-all duration-200 group"
              >
                {provider === "Google" ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-zinc-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-600 text-xs tracking-widest uppercase">or register with email</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="group">
              <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                Full Name
              </label>
              <div className={`relative rounded-xl border transition-all duration-200 ${
                errors.fullName ? "border-red-500/60 bg-red-500/5" :
                focused === "fullName" ? "border-indigo-500/60 bg-indigo-500/5" :
                "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className={`w-4 h-4 transition-colors ${focused === "fullName" ? "text-indigo-400" : "text-zinc-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocused("fullName")}
                  onBlur={() => setFocused("")}
                  className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none rounded-xl"
                />
              </div>
              {errors.fullName && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                Email Address
              </label>
              <div className={`relative rounded-xl border transition-all duration-200 ${
                errors.email ? "border-red-500/60 bg-red-500/5" :
                focused === "email" ? "border-indigo-500/60 bg-indigo-500/5" :
                "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className={`w-4 h-4 transition-colors ${focused === "email" ? "text-indigo-400" : "text-zinc-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  className="w-full bg-transparent pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none rounded-xl"
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                Password
              </label>
              <div className={`relative rounded-xl border transition-all duration-200 ${
                errors.password ? "border-red-500/60 bg-red-500/5" :
                focused === "password" ? "border-indigo-500/60 bg-indigo-500/5" :
                "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className={`w-4 h-4 transition-colors ${focused === "password" ? "text-indigo-400" : "text-zinc-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  className="w-full bg-transparent pl-11 pr-12 py-3.5 text-sm text-white placeholder-zinc-600 outline-none rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {/* Strength Meter */}
              {formData.password && (
                <div className="mt-2.5 px-1">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i <= strength.level ? strength.color : "bg-zinc-800"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs ${
                    strength.level === 1 ? "text-red-400" :
                    strength.level === 2 ? "text-amber-400" :
                    "text-emerald-400"
                  }`}>
                    {strength.label} password
                  </p>
                </div>
              )}
              {errors.password && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-2 tracking-wide uppercase">
                Confirm Password
              </label>
              <div className={`relative rounded-xl border transition-all duration-200 ${
                errors.confirmPassword ? "border-red-500/60 bg-red-500/5" :
                focused === "confirmPassword" ? "border-indigo-500/60 bg-indigo-500/5" :
                formData.confirmPassword && formData.password === formData.confirmPassword ? "border-emerald-500/40 bg-emerald-500/5" :
                "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
              }`}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg className={`w-4 h-4 transition-colors ${focused === "confirmPassword" ? "text-indigo-400" : "text-zinc-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repeat your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setFocused("confirmPassword")}
                  onBlur={() => setFocused("")}
                  className="w-full bg-transparent pl-11 pr-12 py-3.5 text-sm text-white placeholder-zinc-600 outline-none rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors"
                >
                  {formData.confirmPassword && formData.password === formData.confirmPassword ? (
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : showConfirm ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1.5 pl-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <p className="text-xs text-zinc-500 leading-relaxed">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-zinc-400 hover:text-white underline underline-offset-2 transition-colors">Privacy Policy</a>.
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white relative overflow-hidden group transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </form>
        </div>
      </div>

      {/* Import Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease forwards; }
      `}</style>
    </div>
  );
}