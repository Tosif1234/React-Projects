import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }
    try {
      setError(""); setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) { setError("Failed to create account: " + err.message); }
    setLoading(false);
  }

  const fields = [
    { label: "Email address", ref: emailRef, type: "email", placeholder: "you@example.com" },
    { label: "Password", ref: passwordRef, type: "password", placeholder: "Min. 8 characters" },
    { label: "Confirm password", ref: passwordConfirmRef, type: "password", placeholder: "Repeat password" },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] font-sans flex">

      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16 relative overflow-hidden border-r border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 60px)' }} />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

        <span className="font-serif text-2xl text-[#d4af37] tracking-tight">AppDash</span>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]/60 mb-4">Get started</p>
          <h2 className="font-serif text-5xl text-white/90 leading-[1.15] mb-6">
            Join thousands<br />of teams<br />shipping faster.
          </h2>
          <div className="flex items-center gap-3 mt-8">
            {['Free forever', 'No credit card', 'Cancel anytime'].map(t => (
              <span key={t} className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/[0.08] text-white/35">
                {t}
              </span>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-white/20 tracking-widest">© 2026 APPDASH</p>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[380px]">

          <div className="lg:hidden mb-10">
            <span className="font-serif text-2xl text-[#d4af37]">AppDash</span>
          </div>

          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#d4af37]/70 mb-2">Create account</p>
          <h1 className="font-serif text-[28px] text-white/90 mb-8 tracking-tight">Start for free</h1>

          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg border border-red-500/20 bg-red-500/[0.08] text-red-400 text-[13px]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map(({ label, ref, type, placeholder }) => (
              <div key={label}>
                <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-white/35 mb-2">{label}</label>
                <input
                  type={type} ref={ref} required placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-[14px] text-white/80 placeholder:text-white/15 outline-none focus:border-[#d4af37]/40 focus:bg-white/[0.07] transition-all duration-200"
                />
              </div>
            ))}

            <button
              type="submit" disabled={loading}
              className="w-full mt-2 py-3 rounded-xl text-[14px] font-semibold tracking-wide text-[#0e0e0e] transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #d4af37, #f0d060)' }}
            >
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-[12px] text-center text-white/25">
            Already have an account?{" "}
            <Link to="/login" className="text-[#d4af37]/70 hover:text-[#d4af37] transition-colors">Sign in</Link>
          </p>

          <p className="mt-4 text-[11px] text-center text-white/15 leading-relaxed">
            By signing up you agree to our{" "}
            <span className="text-white/30 cursor-pointer hover:text-white/50 transition-colors">Terms</span>
            {" "}and{" "}
            <span className="text-white/30 cursor-pointer hover:text-white/50 transition-colors">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}