import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 40 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 60 },
  ]);

  function handleRefresh() {
    setPosts(prevState => [
      ...prevState,
    {
      id: Math.random(),
      title: `Title#0${prevState.length + 1}`, 
      subtitle: `Subtitle#0${prevState.length + 1}`, 
      likes: 20
    }
    ]);
  }

  function handleRemovePost(postId) {
    setPosts(prevState => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          onRemove={handleRemovePost}
          subtitle={post.subtitle}
          likes={post.likes}
          id={post.id}
        />
      ))}

    </>
  );
}

export default App;