import React from 'react';
import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>
      <Header title="My blog">
        <h2>Posts da Semana</h2>
      </Header>

      <hr />

      <Post 
        title='Titulo da noticia 01' 
        subtitle='Subtitulo da noticia 01'
      />
      <Post 
        title='Titulo da noticia 02' 
        subtitle='Subtitulo da noticia 02'
      />
      <Post 
        title='Titulo da noticia 03' 
        subtitle='Subtitulo da noticia 03'
      />
      <Post 
        title='Titulo da noticia 04' 
        subtitle='Subtitulo da noticia 04'
      />
    </>
  );
}

export default App;