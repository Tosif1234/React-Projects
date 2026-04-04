import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Password reset email sent. Check your inbox and spam folder.");
    } catch (err) {
      setError(err.message || "Failed to send password reset email.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] font-sans flex">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-16 relative overflow-hidden border-r border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(212,175,55,0.03) 0px, rgba(212,175,55,0.03) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

        <span className="font-serif text-2xl text-[#d4af37] tracking-tight">AppDash</span>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]/60 mb-4">
            Account recovery
          </p>
          <h2 className="font-serif text-5xl text-white/90 leading-[1.15] mb-6">
            Reset access
            <br />
            and get back
            <br />
            to work.
          </h2>
          <p className="text-[14px] text-white/35 leading-relaxed max-w-xs">
            We will email you a secure link so you can choose a new password.
          </p>
        </div>

        <p className="text-[11px] text-white/20 tracking-widest">Copyright 2026 APPDASH</p>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[380px]">
          <div className="lg:hidden mb-10">
            <span className="font-serif text-2xl text-[#d4af37]">AppDash</span>
          </div>

          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#d4af37]/70 mb-2">
            Forgot password
          </p>
          <h1 className="font-serif text-[28px] text-white/90 mb-3 tracking-tight">
            Reset your password
          </h1>
          <p className="text-[13px] text-white/35 mb-8 leading-relaxed">
            Enter your email address and we will send you a reset link.
          </p>

          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg border border-red-500/20 bg-red-500/[0.08] text-red-400 text-[13px]">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-6 px-4 py-3 rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/[0.08] text-[#d4af37] text-[13px]">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-white/35 mb-2">
                Email address
              </label>
              <input
                type="email"
                ref={emailRef}
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] text-[14px] text-white/80 placeholder:text-white/20 outline-none focus:border-[#d4af37]/40 focus:bg-white/[0.07] transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-xl text-[14px] font-semibold tracking-wide text-[#0e0e0e] transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #d4af37, #f0d060)" }}
            >
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </form>

          <div className="mt-8 text-center space-y-2">
            <Link
              to="/login"
              className="block text-[12px] text-[#d4af37]/70 hover:text-[#d4af37] transition-colors"
            >
              Back to sign in
            </Link>
            <p className="text-[12px] text-white/25">
              Need an account?{" "}
              <Link
                to="/signup"
                className="text-[#d4af37]/70 hover:text-[#d4af37] transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
