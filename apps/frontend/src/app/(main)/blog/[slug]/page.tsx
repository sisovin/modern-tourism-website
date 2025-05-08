import React from 'react';
import { useRouter } from 'next/router';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <section>
        <h1>Blog Post: {slug}</h1>
        <p>This is the blog post content for the post with slug: {slug}</p>
      </section>
    </div>
  );
};

export default BlogPostPage;
