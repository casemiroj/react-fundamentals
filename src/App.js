import React from 'react';
import Post from './Post';
import Header from './Header';

const posts = [
  { title: 'Title#01', subtitle: 'Subtitle#01', likes: 20 },
  { title: 'Title#02', subtitle: 'Subtitle#02', likes: 40 },
  { title: 'Title#03', subtitle: 'Subtitle#03', likes: 60 },
]

function App() {
  return (
    <>
      <Header>
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          title={post.title}
          subtitle={post.subtitle}
          likes={post.likes}
        />
      ))}

    </>
  );
}

export default App;