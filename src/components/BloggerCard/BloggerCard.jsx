import React from 'react';

const BloggerCard = (props) => {
  const { data: { username } } = props;
  return (
    <div className="aside-blogger">
      <div className="aside-blogger_name">
        {username}
      </div>
    </div>
  );
};

export default BloggerCard;