const fs = require('fs').promises;

const readBlogPostFile = async () => {
  try {
    const arryPosts = await fs.readFile('src/trybitter.json', 'utf-8');

    return JSON.parse(arryPosts);
  } catch (error) {
    return null;
  }
};

const getBlogPostLastId = async () => {
  const arrayPosts = await readBlogPostFile();
  return arrayPosts[0];
};

const insertBlogPostFile = async (post) => {
  try {
    const arrayPosts = await readBlogPostFile();
    arrayPosts.push(post);
    arrayPosts[0] += 1;

    return await fs.writeFile('src/trybitter.json', JSON.stringify(arrayPosts));
  } catch (error) {
    return null;
  }
};

const changeBlogPostFile = async (post, id) => {
  try {
    const arrayPosts = await readBlogPostFile();
    let changedPost;

    for (let i = 0; i < arrayPosts.length; i += 1) {
      if (arrayPosts[i].id === Number(id)) {
        arrayPosts[i].title = post.title;
        arrayPosts[i].description = post.description;
        arrayPosts[i].updatedAt = post.updatedAt;
        changedPost = arrayPosts[i];
      }
    }

  await fs.writeFile('src/trybitter.json', JSON.stringify(arrayPosts));
  return changedPost;
  } catch (error) {
    return null;
  }
};

module.exports = {
  readBlogPostFile,
  getBlogPostLastId,
  insertBlogPostFile,
  changeBlogPostFile,
};