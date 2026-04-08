import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, fetchPosts } from "../features/posts/postSlice";

const sortPosts = (posts, sortBy) => {
  const sortedPosts = [...posts];

  if (sortBy === "date") {
    sortedPosts.sort(
      (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
  }

  if (sortBy === "popularity") {
    sortedPosts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }

  if (sortBy === "title") {
    sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sortedPosts;
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function PostList() {
  const dispatch = useDispatch();
  const { list: posts, status, error } = useSelector((state) => state.posts);
  const user = useSelector((state) => state.auth.user);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = async (post) => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }

    try {
      await dispatch(deletePost(post)).unwrap();
    } catch (message) {
      alert(message);
    }
  };

  const categories = Array.from(
    new Set(posts.map((post) => post.category).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const authors = Array.from(
    new Set(posts.map((post) => post.authorName).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !normalizedQuery ||
      [post.title, post.description, post.category, post.authorName].some((field) =>
        field?.toLowerCase().includes(normalizedQuery)
      );

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    const matchesAuthor =
      selectedAuthor === "all" || post.authorName === selectedAuthor;

    return matchesSearch && matchesCategory && matchesAuthor;
  });

  const visiblePosts = sortPosts(filteredPosts, sortBy);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/60 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Community Blog
              </div>

              <div>
                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                  Read, search, and manage every story from one clean feed.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
                  Browse posts by topic or author, sort the collection the way you
                  want, and jump straight into creating your next article.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-2xl bg-slate-100 px-4 py-3">
                  <p className="mb-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Total Posts
                  </p>
                  <p className="mb-0 text-2xl font-black text-slate-900">{posts.length}</p>
                </div>
                <div className="rounded-2xl bg-blue-50 px-4 py-3">
                  <p className="mb-0 text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
                    Visible Now
                  </p>
                  <p className="mb-0 text-2xl font-black text-blue-700">
                    {visiblePosts.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 rounded-[1.75rem] bg-slate-900 p-6 text-white">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Quick Actions
                </p>
                <h2 className="mb-3 text-2xl font-black">Keep your content moving</h2>
                <p className="mb-0 text-sm leading-6 text-slate-300">
                  Signed-in users can publish new posts, update their articles, and
                  manage their own content directly from the dashboard.
                </p>
              </div>

              {user ? (
                <div className="space-y-3">
                  <div className="rounded-2xl bg-white/10 px-4 py-3">
                    <p className="mb-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Welcome Back
                    </p>
                    <p className="mb-0 mt-1 text-lg font-bold">{user.name}</p>
                  </div>
                  <Link
                    to="/add"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white no-underline shadow-lg shadow-blue-900/30 transition hover:bg-blue-700"
                    style={{ textDecoration: "none" }}
                  >
                    Add New Post
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-slate-900 no-underline transition hover:bg-slate-100"
                    style={{ textDecoration: "none" }}
                  >
                    Login to Start Posting
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white no-underline transition hover:bg-white/10"
                    style={{ textDecoration: "none" }}
                  >
                    Create New Account
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mb-6 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200/40 md:p-5">
          <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(3,minmax(0,0.7fr))_auto] lg:items-end">
            <div>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Search
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, description, category, or author"
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={inputClass}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Author
              </label>
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className={inputClass}
              >
                <option value="all">All Authors</option>
                {authors.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={inputClass}
              >
                <option value="date">Latest First</option>
                <option value="popularity">Most Popular</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedAuthor("all");
                  setSortBy("date");
                }}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white lg:w-auto"
              >
                Reset
              </button>
            </div>
          </div>

        </section>

        {status === "loading" ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[28rem] animate-pulse rounded-[2rem] bg-slate-200"
              />
            ))}
          </div>
        ) : null}

        {error ? (
          <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            {error}
          </div>
        ) : null}

        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
            Showing {visiblePosts.length} of {posts.length} posts
          </span>
          {selectedCategory !== "all" ? (
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Category: {selectedCategory}
            </span>
          ) : null}
          {selectedAuthor !== "all" ? (
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Author: {selectedAuthor}
            </span>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => {
            const isOwner = user?.id === post.userId;

            return (
              <article
                key={post.id}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-md shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-900 backdrop-blur">
                      {post.category}
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                      {post.date}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-black text-blue-700">
                        {post.authorName?.charAt(0) || "U"}
                      </div>
                      <div>
                        <p className="mb-0 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Author
                        </p>
                        <p className="mb-0 text-sm font-bold text-slate-800">
                          {post.authorName || "Unknown user"}
                        </p>
                        {isOwner ? (
                          <span className="mt-1 inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                            Your Post
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      {post.popularity || 0}
                    </div>
                  </div>

                  <h2 className="mb-3 text-2xl font-black leading-tight text-slate-900 transition group-hover:text-blue-700">
                    {post.title}
                  </h2>

                  <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-500">
                    {post.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <Link
                        to={`/posts/${post.id}`}
                        className="inline-flex items-center justify-center self-start rounded-full bg-slate-900 px-4 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-700"
                        style={{ textDecoration: "none" }}
                      >
                        View Post
                      </Link>

                      {isOwner ? (
                        <>
                          <Link
                            to={`/edit/${post.id}`}
                            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700 no-underline transition hover:border-blue-600 hover:bg-blue-600 hover:!text-white"
                            style={{ textDecoration: "none" }}
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(post)}
                            className="inline-flex appearance-none items-center justify-center rounded-full border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-700 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                            style={{ borderRadius: "9999px" }}
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <div className="rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-500">
                          Author only
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {!visiblePosts.length && status !== "loading" ? (
          <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white px-6 py-14 text-center shadow-lg shadow-slate-200/40">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900">No posts found</h3>
            <p className="mt-3 text-slate-500">
              Try a different keyword, category, or author filter.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
