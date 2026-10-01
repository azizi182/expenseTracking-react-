import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginData = {
      email: emailAddress,
      password: password,
      rememberMe: rememberMe,
    };

    console.log("Login data:", loginData);
    alert("Login submitted. Check console.");
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-900">
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE - LOGIN FORM */}
        <div className="h-full flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-8">
          <div className="w-full max-w-md">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Secure Login
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-3">
                Welcome Back
              </h1>

              <p className="text-slate-500 leading-relaxed">
                Please login to your account to continue managing your expense
                tracking dashboard.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-blue-100 text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
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
                    placeholder="Enter your password"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-blue-100 text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 accent-blue-600"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  Forgot password?
                </button>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition"
              >
                Sign In
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-sm text-slate-600 mt-8">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-blue-600 hover:text-blue-800 transition"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="hidden lg:block relative h-full">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
            alt="Expense tracking workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/70 to-cyan-700/60"></div>

          {/* Right Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-16 text-white">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <span className="w-2 h-2 bg-green-300 rounded-full"></span>
                Expense Tracking System
              </div>

              <h2 className="text-6xl font-bold leading-tight">
                Track your money smarter.
              </h2>

              <p className="text-blue-100 text-xl leading-relaxed mt-6">
                Manage your expenses, monitor your spending, and understand your
                financial habits using a simple modern dashboard.
              </p>

              {/* Small Cards */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <p className="text-sm text-blue-100">Monthly Balance</p>
                  <h3 className="text-3xl font-bold mt-2">RM 1,250</h3>
                </div>

                <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <p className="text-sm text-blue-100">Total Expenses</p>
                  <h3 className="text-3xl font-bold mt-2">RM 750</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;