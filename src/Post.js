import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return(
    <> 
      <article>
        <strong>{props.title}</strong>
        <button onClick={() => props.onRemove(props.id)}>Remover</button>
        <br />
        <small>{props.subtitle}</small>
        <br />
        Likes: {props.likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
}