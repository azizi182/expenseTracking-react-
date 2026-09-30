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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-6">
      {/* Background Decoration */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
        
        {/* Left Content */}
        <div className="hidden lg:flex flex-col justify-between p-12 text-white bg-gradient-to-br from-blue-600/80 via-cyan-500/70 to-blue-900/80">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              Secure Dashboard Access
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Welcome back to your workspace.
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed">
              Monitor your activity, manage your data, and access your dashboard
              with a clean and modern login experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/20 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-sm text-blue-100 mt-1">System Access</p>
            </div>

            <div className="bg-white/20 rounded-2xl p-5 backdrop-blur-md">
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-sm text-blue-100 mt-1">Secure Login</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="p-8 sm:p-12 bg-white">
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600 mb-2">
              LOGIN ACCOUNT
            </p>
            <h2 className="text-4xl font-bold text-slate-900">
              Sign in
            </h2>
            <p className="text-slate-500 mt-3">
              Please enter your details to continue.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
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
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Remember and Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="w-4 h-4 rounded"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm font-semibold text-blue-600 hover:text-blue-800"
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

          <p className="text-center text-sm text-slate-600 mt-8">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;