import React from 'react'
import Resume from './sections/resume'
import Competences from './sections/competences'
import OtherCompetences from './sections/other-competences'
import Experiences from './sections/experiences'
import Education from './sections/education'
import Projects from './sections/projects'
import { FaGithub } from 'react-icons/fa'

function App() {

  return (
    <>
      <main className="container" style={{paddingBottom: 0}}>
        <Resume />
        <Competences />
        <OtherCompetences />
        <Experiences />
        <Education />
        <Projects />
      </main>
      <footer>
        <p>Desenvolvido com ❤️ por Luan de Jesus Teixeira • <a href="https://github.com/luan-jesus/portfolio" target="_blank"><FaGithub /> Repositório</a></p>
      </footer>
    </>
  )
}

export default App
