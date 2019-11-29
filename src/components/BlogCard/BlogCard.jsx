import React from 'react';
import './blogCard.css';

const BlogCard = (props) => {
  const { data: { author, description, title } } = props;
  return (
    <article className="outline artical-wrapp">
      <div className="article-header">
        <div className="article-author">{author}</div>
        <div className="article-title">{title}</div>
      </div>
      <div className="article-body">{description}</div>
    </article>
  );
};

export default BlogCard;