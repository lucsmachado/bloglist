const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return {};

  const favorite = blogs.find((blog) => blog.likes === Math.max(...blogs.map((blog) => blog.likes)));
  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  };
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return {};

  let blogsPerAuthor = [];
  blogs.forEach((blog) => {
    if (!blogsPerAuthor.some((entry) => entry.author === blog.author)) {
      blogsPerAuthor.push({
        author: blog.author,
        blogs: 1
      });
    } else {
      blogsPerAuthor = blogsPerAuthor.map((entry) => entry.author === blog.author ? {...entry, blogs: entry.blogs + 1} : entry);
    }
  });

  return blogsPerAuthor.find((entry) => entry.blogs === Math.max(...blogsPerAuthor.map((entry) => entry.blogs)));
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) return {};

  let likesPerAuthor = [];
  blogs.forEach((blog) => {
    if (!likesPerAuthor.some((entry) => entry.author === blog.author)) {
      likesPerAuthor.push({
        author: blog.author,
        likes: blog.likes
      });
    } else {
      likesPerAuthor = likesPerAuthor.map((entry) => entry.author === blog.author ? {...entry, likes: entry.likes + blog.likes} : entry);
    }
  });

  return likesPerAuthor.find((entry) => entry.likes === Math.max(...likesPerAuthor.map((entry) => entry.likes)));
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};