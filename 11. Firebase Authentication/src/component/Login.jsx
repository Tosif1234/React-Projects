import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

// tailwind.config.js extend:
//   fontFamily: { serif: ['"DM Serif Display"', 'serif'], sans: ['"DM Sans"', 'sans-serif'] }
// index.html <head>:
//   <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError(""); setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) { setError("Invalid credentials. Please try again."); }
    setLoading(false);
  }

  async function handleGoogleLogin() {
    try {
      setError(""); setLoading(true);
      await loginWithGoogle();
      navigate("/");
    } catch (err) { setError("Google sign-in failed."); }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] font-sans flex">

      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16 relative overflow-hidden border-r border-white/[0.06]">
        {/* Diagonal gold lines */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 60px)',
          }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

        <div>
          <span className="font-serif text-2xl text-[#d4af37] tracking-tight">AppDash</span>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]/60 mb-4">Welcome back</p>
          <h2 className="font-serif text-5xl text-white/90 leading-[1.15] mb-6">
            Your work,<br />beautifully<br />organised.
          </h2>
          <p className="text-[14px] text-white/35 leading-relaxed max-w-xs">
            Sign in to access your dashboard and manage everything in one place.
          </p>
        </div>

        <p className="text-[11px] text-white/20 tracking-widest">© 2026 APPDASH</p>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[380px]">

          {/* Mobile logo */}
          <div className="lg:hidden mb-10">
            <span className="font-serif text-2xl text-[#d4af37]">AppDash</span>
          </div>

          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#d4af37]/70 mb-2">Sign in</p>
          <h1 className="font-serif text-[28px] text-white/90 mb-8 tracking-tight">Welcome back</h1>

          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg border border-red-500/20 bg-red-500/[0.08] text-red-400 text-[13px]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Email address', ref: emailRef, type: 'email' },
              { label: 'Password', ref: passwordRef, type: 'password' },
            ].map(({ label, ref, type }) => (
              <div key={label}>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-white/35 mb-2">{label}</label>
                <input
                  type={type} ref={ref} required
                  className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-[14px] text-white/80 placeholder:text-white/20 outline-none focus:border-[#d4af37]/40 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>
            ))}

            <button
              type="submit" disabled={loading}
              className="w-full mt-2 py-3 rounded-xl text-[14px] font-semibold tracking-wide text-[#0e0e0e] transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #d4af37, #f0d060)' }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="text-[11px] text-white/25 tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          <button
            onClick={handleGoogleLogin} disabled={loading}
            className="w-full py-3 rounded-xl border border-white/[0.09] bg-white/[0.03] text-[14px] font-medium text-white/60 hover:bg-white/[0.07] hover:text-white/80 hover:border-white/[0.15] transition-all duration-200 flex items-center justify-center gap-3"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="mt-8 space-y-2 text-center">
            <Link to="/forgot-password" className="block text-[12px] text-[#d4af37]/60 hover:text-[#d4af37] transition-colors">
              Forgot your password?
            </Link>
            <p className="text-[12px] text-white/25">
              No account?{" "}
              <Link to="/signup" className="text-[#d4af37]/70 hover:text-[#d4af37] transition-colors">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}