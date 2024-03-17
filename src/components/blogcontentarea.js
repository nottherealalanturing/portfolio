import React from 'react';
import BlogItem from './blogitem';
import styles from './styles/blogcontentarea.module.css';

const projects = [
  {
    title: 'Writing elegant codes; Linters.',
    image:
      'https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/07/stack-overflow-blog-linters-how-to-like.png',
    link: 'https://medium.com/@nottherealalanturing/writing-elegant-codes-linters-ebf8c883934',
    paragraph: 'Writing non-convoluted code in javascript is an effortless...',
    author: 'Assad Isah',
  },
];

const BlogContentArea = () => (
  <div className={styles.container}>
    <ul className={styles.band}>
      {projects.map((project) => (
        <BlogItem
          title={project.title}
          image={project.image}
          link={project.link}
          paragraph={project.paragraph}
          author={project.author}
          key={project.title}
        />
      ))}
    </ul>
  </div>
);
export default BlogContentArea;
