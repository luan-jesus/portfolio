import React from 'react'

export default function Projects() {
  return (
    <section>
      <h2>Projetos</h2>
      <div className="projects-wrapper">
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>Projeto 1</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
