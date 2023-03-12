import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/blogitem.module.css';

const BlogItem = ({
  title, image, link, paragraph, author,
}) => (
  <article className={styles.item}>
    <a href={link} className={styles.card}>
      <img src={image} className={styles.thumb} alt={title} />
      <article>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <span>{author}</span>
      </article>
    </a>
  </article>
);

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BlogItem;
