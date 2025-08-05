import React from 'react'

export default function Education() {
  return (
    <section>
      <h2>Formação Acadêmica</h2>
      <div className="education-wrapper">
        <div className="card" style={{ flex: 1, margin: 0 }}>
          <h3>ETEC Vasco Antonio Venchiarutti</h3>
          <span>Janeiro de 2016 – dezembro de 2018</span>
          <p>Técnico em Informática, integrado ao Ensino médio.</p>
        </div>
        <div className="card" style={{ flex: 1, margin: 0 }}>
          <h3>Universidade São Francisco</h3>
          <span>Julho de 2019 – agosto de 2023</span>
          <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
        </div>
      </div>
    </section>
  )
}
