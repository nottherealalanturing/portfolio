import React from 'react';
import { Document, pdfjs, Page } from 'react-pdf';
import { downloadicon, newtabicon } from '../assets/icons';
import MyDoc from '../assets/resume/AssadIsahResume.pdf';
import styles from './styles/resumecontentarea.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeContentArea = () => (
  <div className={styles.container}>
    <nav className={styles.topbar}>
      <a
        href={MyDoc}
        className={styles.btn}
        target="_blank"
        download
        rel="noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid #fafafa',
          borderRight: '1px solid #5a5a5a',
          borderBottom: '1px solid #5a5a5a',
          borderLeft: '1px solid #fafafa',
          padding: '5px',
        }}
      >
        <img src={downloadicon} className={styles.icon} alt="download resume" />
        <p>Download</p>
      </a>

      <a
        href={MyDoc}
        className={styles.btn}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid #fafafa',
          borderRight: '1px solid #5a5a5a',
          borderBottom: '1px solid #5a5a5a',
          borderLeft: '1px solid #fafafa',
          padding: '5px',
        }}
      >
        <img
          src={newtabicon}
          className={styles.icon}
          alt="open resume in new tab"
        />
        <p>Open In Another Tab</p>
      </a>
    </nav>

    <Document file={MyDoc}>
      <Page
        pageNumber={1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        width="400"
        scale={1.2}
      />
    </Document>
  </div>
);

export default ResumeContentArea;
