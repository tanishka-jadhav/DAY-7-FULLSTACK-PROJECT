function About() {
  return (
    <section className="panel">
      <h2>Folder Structure</h2>
      <ul className="structure-list">
        <li>
          <strong>src/api.js</strong>
          <span>Axios client and backend API functions.</span>
        </li>
        <li>
          <strong>src/components</strong>
          <span>Reusable UI pieces such as layout, navbars, and cards.</span>
        </li>
        <li>
          <strong>src/pages</strong>
          <span>Route-level screens rendered by React Router.</span>
        </li>
        <li>
          <strong>src/main.jsx</strong>
          <span>React entry point with Router and React Query providers.</span>
        </li>
      </ul>
    </section>
  )
}

export default About
