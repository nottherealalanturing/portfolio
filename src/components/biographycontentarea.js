import React from "react";
import { BsGithub, BsLinkedin, BsMedium, BsMailbox } from "react-icons/bs";
import { FaAngellist } from "react-icons/fa";
import heroimage from "../assets/images/assadisah.png";
import styles from "./styles/biocontentarea.module.css";

const AboutContentArea = () => (
  <div className={styles.container}>
    <img src={heroimage} alt="Assad Isah" className={styles.image} />
    <div className={styles.textcontainer}>
      <h2 className={styles.header}>Assad Isah</h2>
      <h2 className={styles.header}>(nottherealalanturing)</h2>
      <h4 className={styles.role}>Fullstack Developer</h4>
      <h4 className={styles.location}>Kaduna, Nigeria. 📍</h4>
    </div>
    <div className="badge-grid">
      <img
        className="badge"
        alt="HTML"
        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
      />
      <img
        className="badge"
        alt="CSS"
        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
      />
      <img
        className="badge"
        alt="Ruby"
        src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white"
      />
      <img
        className="badge"
        alt="JavaScript"
        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
      />
      <img
        className="badge"
        alt="Git"
        src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
      />

      <img
        className="badge"
        alt="Rails"
        src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
      />
      <img
        className="badge"
        alt="React"
        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
      />
      <img
        className="badge"
        alt="Webpack"
        src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"
      />
      <img
        className="badge"
        alt="Postgres"
        src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
      />
      <img
        className="badge"
        alt="express"
        src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
      />
      <img
        className="badge"
        alt="GraphQL"
        src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
      />
      <img
        className="badge"
        alt="Ruby"
        src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white"
      />
      <img
        className="badge"
        alt="Redux"
        src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
      />
      <img
        className="badge"
        alt="Next"
        src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
      />
      <img
        className="badge"
        alt="Node"
        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
      />
      <img
        className="badge"
        alt="Mongodb"
        src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
      />
    </div>
    <div className="innercontainer">
      <h3 className={styles.heading}>About Me</h3>
      <p className={styles.paragraph}>
        Hi there, I&apos;m Assad, a full-stack web developer with a passion for
        creating user-friendly solutions. I specialize in using JavaScript and
        Ruby to bring UX designs to life and build simple, intuitive products,
        features, and websites. Take a look at some of my work and experience to
        see if I&apos;m the right fit for your project. If you&apos;re
        interested in working together, don&apos;t hesitate to reach out,
        I&apos;d love to help bring your vision to fruition.
      </p>
    </div>

    <div className={styles.contact}>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/nottherealalanturing"
      >
        <BsGithub size="45px" color="#594c4c" className={styles.contacticons} />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/assadisah/"
      >
        <BsLinkedin
          size="45px"
          color="#594c4c"
          className={styles.contacticons}
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://medium.com/@nottherealalanturing"
      >
        <BsMedium size="45px" color="#594c4c" className={styles.contacticons} />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="mailto:nottherealalanturing@gmail.com"
      >
        <BsMailbox
          size="45px"
          color="#594c4c"
          className={styles.contacticons}
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://angel.co/u/nottherealalanturing"
      >
        <FaAngellist
          size="45px"
          color="#594c4c"
          className={styles.contacticons}
        />
      </a>
    </div>
  </div>
);

export default AboutContentArea;
