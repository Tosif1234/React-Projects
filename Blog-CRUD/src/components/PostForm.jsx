import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addPost, fetchPosts, updatePost } from "../features/posts/postSlice";

const emptyForm = {
  title: "",
  image: "",
  description: "",
  date: "",
  category: "",
};

const toFormValues = (post) => ({
  title: post?.title || "",
  image: post?.image || "",
  description: post?.description || "",
  date: post?.date || "",
  category: post?.category || "",
});

function PostEditor({ initialValues, isEditMode, user, onSubmit }) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none";

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-slate-800">
          {isEditMode ? "Edit Post" : "Add New Post"}
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Signed in as <span className="font-semibold">{user?.name}</span>
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              className={inputClass}
              placeholder="Enter post title"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              value={form.image}
              className={inputClass}
              placeholder="https://example.com/image.jpg"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              className={inputClass}
              placeholder="What's on your mind?"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Date
              </label>
              <input
                name="date"
                type="date"
                value={form.date}
                className={inputClass}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Category
              </label>
              <input
                name="category"
                value={form.category}
                className={inputClass}
                placeholder="e.g. Technology"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {isEditMode ? "Update Post" : "Publish Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.posts.list);
  const post = posts.find((item) => item.id === id);
  const isEditMode = Boolean(id);
  const isOwner = !post || post.userId === user?.id;

  useEffect(() => {
    if (isEditMode && !post) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isEditMode, post]);

  const handleSubmit = async (formValues) => {
    if (
      !formValues.title ||
      !formValues.description ||
      !formValues.category ||
      !formValues.date
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const payload = {
      ...formValues,
      image:
        formValues.image ||
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    };

    try {
      if (isEditMode) {
        await dispatch(
          updatePost({
            ...post,
            ...payload,
          })
        ).unwrap();
      } else {
        await dispatch(addPost(payload)).unwrap();
      }

      navigate("/");
    } catch (message) {
      alert(message);
    }
  };

  if (isEditMode && !post) {
    return (
      <div className="px-4 py-10 text-center text-slate-500">Loading post...</div>
    );
  }

  if (isEditMode && !isOwner) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-8 text-center shadow-md">
        <h2 className="text-2xl font-bold text-slate-800">Access denied</h2>
        <p className="mt-3 text-slate-500">
          You can edit only the posts created by your own account.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-slate-800 px-4 py-2 text-white no-underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <PostEditor
      key={isEditMode ? post.id : "new-post"}
      initialValues={isEditMode ? toFormValues(post) : emptyForm}
      isEditMode={isEditMode}
      user={user}
      onSubmit={handleSubmit}
    />
  );
}
