import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    const registerData = {
      fullName: fullName,
      email: emailAddress,
      phoneNumber: phoneNumber,
      password: password,
    };

    console.log("Register data:", registerData);
    alert("Registration submitted. Check console.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6 py-10">
      {/* Background Decoration */}
      <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/3 left-1/3 w-44 h-44 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
        
        {/* Register Form */}
        <div className="p-8 sm:p-12 bg-white">
          <div className="mb-8">
            <p className="text-sm font-semibold text-purple-600 mb-2">
              CREATE ACCOUNT
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              Register
            </h2>
            <p className="text-slate-500 mt-3">
              Fill in your details to create a new account.
            </p>
          </div>

          <form onSubmit={handleRegisterSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  👤
                </span>

                <input
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  ✉️
                </span>

                <input
                  type="email"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                  placeholder="example@email.com"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  📱
                </span>

                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  placeholder="0123456789"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  🔒
                </span>

                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create your password"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  ✅
                </span>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(event) => setAgreeToTerms(event.target.checked)}
                className="w-4 h-4 mt-1 rounded"
              />

              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="font-semibold text-purple-600 hover:text-purple-800"
                >
                  terms and conditions
                </button>
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-purple-600 hover:text-purple-800"
            >
              Login here
            </Link>
          </p>
        </div>

        {/* Right Content */}
        <div className="hidden lg:flex flex-col justify-between p-12 text-white bg-gradient-to-br from-purple-600/80 via-pink-500/70 to-slate-900/80">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              New User Registration
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Start your journey with us.
            </h1>

            <p className="text-purple-100 text-lg leading-relaxed">
              Create your account and get access to your dashboard, management
              tools, reports, and user features.
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <div className="bg-white/20 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-xl font-bold">Fast Registration</h3>
              <p className="text-sm text-purple-100 mt-1">
                Simple form structure with basic validation.
              </p>
            </div>

            <div className="bg-white/20 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-xl font-bold">Modern Interface</h3>
              <p className="text-sm text-purple-100 mt-1">
                Clean design using Tailwind CSS utility classes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;