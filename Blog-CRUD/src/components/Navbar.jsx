import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const navItemClass = (active) =>
  `inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold no-underline transition ${
    active
      ? "bg-blue-50 text-blue-700"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 px-4 py-4 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          style={{ textDecoration: "none" }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-base font-black text-white">
            B
          </div>

          <div className="hidden sm:block">
            <p className="mb-0 text-lg font-black tracking-tight text-slate-900">
              BlogSphere
            </p>
            <p className="mb-0 text-xs font-medium text-slate-400">
              Thoughtful stories, clean reading
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3 lg:gap-4">
          {!isAuthPage ? (
            <nav className="hidden items-center gap-2 md:flex">
              <Link
                to="/"
                className={navItemClass(location.pathname === "/")}
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>

              {user ? (
                <Link
                  to="/add"
                  className={navItemClass(location.pathname === "/add")}
                  style={{ textDecoration: "none" }}
                >
                  Add Post
                </Link>
              ) : null}
            </nav>
          ) : null}

          {user ? (
            <>
              <Link
                to="/add"
                className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-700 md:hidden"
                style={{ textDecoration: "none" }}
              >
                Add Post
              </Link>

              <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-sm md:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-700">
                  {initials}
                </div>

                <div className="pr-2">
                  <p className="mb-0 text-sm font-bold text-slate-800">
                    {user.name}
                  </p>
                  <p className="mb-0 text-xs text-slate-400">{user.email}</p>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center rounded-full px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100 hover:text-red-700"
                >
                  Logout
                </button>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-2xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 hover:text-red-700 md:hidden"
              >
                Logout
              </button>
            </>
          ) : isAuthPage ? (
            <div className="flex items-center gap-2">
              {location.pathname === "/login" ? (
                <Link
                  to="/signup"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-700"
                  style={{ textDecoration: "none" }}
                >
                  Create Account
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-700"
                  style={{ textDecoration: "none" }}
                >
                  Back to Login
                </Link>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className={navItemClass(location.pathname === "/login")}
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-700"
                style={{ textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
