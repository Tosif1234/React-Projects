import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPosts } from "../features/posts/postSlice";

export default function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { list: posts, status } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.auth.user);

  const post = posts.find((item) => item.id === id);
  const isOwner = user?.id === post?.userId;

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts());
    }
  }, [dispatch, post]);

  if (!post && status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50 px-4">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="mt-4 text-base font-semibold text-slate-600">
            Loading post...
          </p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50 px-4">
        <div className="w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-200/50">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-black text-slate-900">
            Post not found
          </h1>
          <p className="mt-3 text-slate-500">
            The post you are looking for may have been removed or does not exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-xl bg-slate-900 px-6 py-3 font-bold text-white no-underline transition hover:bg-blue-700"
            style={{ textDecoration: "none" }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/60 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 no-underline transition hover:text-blue-700"
            style={{ textDecoration: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Posts
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {user ? (
              <Link
                to="/add"
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 no-underline transition hover:border-blue-600 hover:bg-blue-600 hover:!text-white"
                style={{ textDecoration: "none" }}
              >
                Add Post
              </Link>
            ) : null}
            {isOwner ? (
              <Link
                to={`/edit/${post.id}`}
                className="rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-700"
                style={{ textDecoration: "none" }}
              >
                Edit Post
              </Link>
            ) : null}
          </div>
        </div>

        <article className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="relative h-[280px] sm:h-[360px]">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-900 backdrop-blur">
                  {post.category}
                </span>
                <span className="rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                  Popularity {post.popularity || 0}
                </span>
                {isOwner ? (
                  <span className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Your Post
                  </span>
                ) : null}
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6 border-b border-slate-100 pb-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-lg font-black text-blue-700">
                  {post.authorName?.charAt(0) || "U"}
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Author
                  </p>
                  <p className="mb-1 text-lg font-bold text-slate-900">
                    {post.authorName}
                  </p>
                  <p className="mb-0 text-sm text-slate-500">
                    Published on {post.date}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 md:min-w-[360px]">
                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Category
                  </p>
                  <p className="mb-0 text-sm font-bold text-slate-800">
                    {post.category}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Status
                  </p>
                  <p className="mb-0 text-sm font-bold text-slate-800">
                    {isOwner ? "Owner view" : "Public view"}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Score
                  </p>
                  <p className="mb-0 text-sm font-bold text-slate-800">
                    {post.popularity || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <section>
                <p className="text-lg leading-9 text-slate-600">
                  {post.description}
                </p>
              </section>

              <aside className="space-y-4">
                <div className="rounded-[1.75rem] bg-slate-50 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Overview
                  </p>
                  <h2 className="mb-3 text-2xl font-black text-slate-900">
                    Quick Summary
                  </h2>
                  <p className="mb-0 text-sm leading-7 text-slate-600">
                    This post was shared by{" "}
                    <span className="font-bold text-slate-900">{post.authorName}</span>
                    {" "}under the{" "}
                    <span className="font-bold text-blue-700">{post.category}</span>
                    {" "}category and currently holds a popularity score of{" "}
                    <span className="font-bold text-slate-900">{post.popularity || 0}</span>.
                  </p>
                </div>

                <div className="flex w-full flex-wrap items-center justify-between gap-3 rounded-full bg-slate-900 px-4 py-3 text-white">
                  <p className="mb-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Next Step
                  </p>

                  {user ? (
                    <Link
                      to="/add"
                      className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 no-underline transition hover:bg-blue-50"
                      style={{ textDecoration: "none" }}
                    >
                      Add Post
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 no-underline transition hover:bg-blue-50"
                      style={{ textDecoration: "none" }}
                    >
                      Login to Post
                    </Link>
                  )}
                </div>

              </aside>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
}
