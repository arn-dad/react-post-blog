import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import BloggerCard from '../../components/BloggerCard/BloggerCard';
import API from '../../api';
import './home.css';

const Home = () => {
  const [bloggers, setBloggers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    API.people.get().then((response) => { 
      return response.json().then((data) => {
        setBloggers(data)
      })
     });
    API.posts.get().then((response) => { 
      return response.json().then((data) => {
        setPosts(data)
      })
    });
  }, [])

  return (
    <>
      <aside className="outline">
      {bloggers.map((blogger) => {
          return (
            <BloggerCard key={blogger.id} data={blogger}/>
          )
      })}
      </aside>
      <div className="blogs">
        <section className="outline">
          {posts.map((post) => {
            return (
              <BlogCard key={post.id} data={post} />
              )
          })}
        </section>
        <footer className="outline"></footer>
      </div>
    </>
  );
};

export default Home;