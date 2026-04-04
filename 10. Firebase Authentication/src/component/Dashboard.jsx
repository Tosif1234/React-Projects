import React, { useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, logout, updateUserDisplayName } = useAuth();
  const navigate = useNavigate();
  const nameRef = useRef();

  const getAvatarName = () => {
    if (currentUser?.displayName) return currentUser.displayName;
    if (currentUser?.email) return currentUser.email.charAt(0).toUpperCase();
    return "U";
  };

  const avatarUrl = currentUser?.photoURL ||
    `https://ui-avatars.com/api/?name=${getAvatarName()}&background=d4af37&color=0e0e0e&size=128&bold=true`;

  async function handleLogout() {
    setError("");
    try { await logout(); navigate("/login"); }
    catch { setError("Failed to log out"); }
  }

  async function handleUpdateProfile(e) {
    e.preventDefault();
    try {
      setError(""); setMessage(""); setLoading(true);
      await updateUserDisplayName(nameRef.current.value);
      setMessage("Profile updated successfully!");
    } catch { setError("Failed to update profile"); }
    finally { setLoading(false); }
  }

  const initials = currentUser?.displayName
    ? currentUser.displayName.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()
    : (currentUser?.email?.charAt(0).toUpperCase() || "U");

  return (
    <div className="min-h-screen bg-[#0e0e0e] font-sans">

      {/* Background texture */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(212,175,55,0.015) 0px, rgba(212,175,55,0.015) 1px, transparent 1px, transparent 80px)' }} />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[rgba(14,14,14,0.88)]">
        <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <span className="font-serif text-xl text-[#d4af37] tracking-tight">AppDash</span>
          <div className="flex items-center gap-5">
            <span className="text-[12px] text-white/30 hidden sm:block tracking-wide">{currentUser?.email}</span>
            <button
              onClick={handleLogout}
              className="text-[12px] font-medium px-4 py-2 rounded-lg border border-white/[0.09] text-white/40 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/[0.07] transition-all duration-200"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto py-12 px-6 relative z-10">

        {/* Alerts */}
        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/[0.07] text-red-400 text-[13px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
            {error}
          </div>
        )}
        {message && (
          <div className="mb-6 px-4 py-3 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.07] text-[#d4af37] text-[13px] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] flex-shrink-0" />
            {message}
          </div>
        )}

        {/* Section label */}
        <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]/60 mb-6">Your profile</p>

        {/* Profile card */}
        <div className="rounded-2xl border border-white/[0.07] overflow-hidden"
          style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}>

          {/* Banner */}
          <div className="h-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1a1400 0%, #2d2200 40%, #1a1a0a 100%)' }}>
            {/* Gold shimmer lines */}
            <div className="absolute inset-0"
              style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(212,175,55,0.06) 0px, rgba(212,175,55,0.06) 1px, transparent 1px, transparent 40px)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
            {/* Corner accent */}
            <div className="absolute top-4 right-6 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#d4af37]/40">
              Member
            </div>
          </div>

          <div className="px-8 pb-8">
            {/* Avatar row */}
            <div className="flex items-end justify-between -mt-12 mb-6">
              <div className="relative">
                {currentUser?.photoURL ? (
                  <img src={avatarUrl} alt="Avatar"
                    className="w-20 h-20 rounded-2xl border-2 border-[#0e0e0e] object-cover shadow-xl" />
                ) : (
                  <div className="w-20 h-20 rounded-2xl border-2 border-[#0e0e0e] shadow-xl flex items-center justify-center text-[22px] font-bold text-[#0e0e0e]"
                    style={{ background: 'linear-gradient(135deg, #d4af37, #f0d060)' }}>
                    {initials}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0e0e0e] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
              </div>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-[#d4af37]/25 text-[#d4af37]/70 bg-[#d4af37]/[0.06]">
                Active
              </span>
            </div>

            {/* User info */}
            <h1 className="font-serif text-[26px] text-white/90 tracking-tight mb-1">
              {currentUser?.displayName || "Welcome!"}
            </h1>
            <p className="text-[13px] text-white/35 font-medium">{currentUser?.email}</p>

            {/* Divider */}
            <div className="my-7 h-px bg-white/[0.06]" />

            {/* Account settings */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#d4af37]/60 mb-5">Account settings</p>

              <form onSubmit={handleUpdateProfile}>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <label className="block text-[11px] font-medium tracking-[0.08em] uppercase text-white/30 mb-3">
                    Display name
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text" ref={nameRef}
                      defaultValue={currentUser?.displayName || ""}
                      placeholder="e.g. Jane Doe"
                      className="flex-1 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] text-[14px] text-white/80 placeholder:text-white/20 outline-none focus:border-[#d4af37]/40 focus:bg-white/[0.07] transition-all duration-200"
                    />
                    <button
                      type="submit" disabled={loading}
                      className="px-6 py-2.5 rounded-xl text-[13px] font-semibold tracking-wide text-[#0e0e0e] transition-all duration-200 hover:opacity-90 active:scale-[0.97] disabled:opacity-40 whitespace-nowrap"
                      style={{ background: 'linear-gradient(135deg, #d4af37, #f0d060)' }}
                    >
                      {loading ? "Saving…" : "Save changes"}
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] text-white/20">
                    This name will be visible to other users on the platform.
                  </p>
                </div>
              </form>
            </div>

            {/* Danger zone */}
            <div className="mt-8">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/20 mb-4">Session</p>
              <button
                onClick={handleLogout}
                className="text-[13px] font-medium px-4 py-2.5 rounded-xl border border-red-500/20 text-red-400/70 hover:text-red-400 hover:bg-red-500/[0.08] hover:border-red-500/35 transition-all duration-200"
              >
                Sign out of AppDash
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}