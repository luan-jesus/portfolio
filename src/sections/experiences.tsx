import React from 'react'

import { BsBriefcaseFill } from "react-icons/bs";

export default function Experiences() {
  return (
    <section>
      <h2><BsBriefcaseFill /> Experiência Profissional</h2>
      <div className="timeline-wrapper">
        <div className="timeline-vertical-line"></div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>RPE – Specialist Developer</h3>
            <p>
              Levantamento e desenvolvimento de novos produtos, Integração entre plataformas,
              Manutenção em plataformas já existentes e legadas, Documentação e testes unitários.
            </p>
            <p><i>Tecnologias principais: Java (Spring Boot), React, Angular, TypeScript.</i></p>
          </div>
          <span className="timeline-date">Maio de 2025 – Atual</span>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Izatta – Tech Leader</h3>
            <p>
              Lider técnico de um time de tecnologia, desenvolvendo melhorias para o sistema,
              desenvolvendo novos sistemas / módulos, planejando e gerindo atividades do time e
              gerenciando as demandas de sustentação.
            </p>
            <p><i>Tecnologias principais: Java (Spring Boot), React, Angular, TypeScript.</i></p>
          </div>
          <span className="timeline-date">Outubro de 2022 – Maio de 2025</span>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Dock – Software Engineer II</h3>
            <p>
              Manutenção e desenvolvimento de novas funcionalidades em uma plataforma contábil,
              atuando principalmente com Java e Angular.
            </p>
            <p><i>Tecnologias principais: Java (Spring Boot), Angular, TypeScript.</i></p>
          </div>
          <span className="timeline-date">Abril de 2021 – Outubro de 2022</span>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Coollabs Tecnologia – Java Backend Developer</h3>
            <p>
              Consultoria em desenvolvimento Backend Java, criação e manutenção de apis, testes unitários.
            </p>
            <p><i>Tecnologias principais: Java (Spring Boot), Angular, TypeScript.</i></p>
          </div>
          <span className="timeline-date">Outubro de 2020 – Abril de 2021</span>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Scope System – Estágio .NET C#</h3>
            <p>
              Desenvolvimento de novas funcionalidades de sistema em C# e Visual Basic, 
              manutenção desses sistemas, suporte ao usuário e elaboração de documentações.
            </p>
            <p><i>Tecnologias principais: C# (.NET Core), Visual Basic, Javascript</i></p>
          </div>
          <span className="timeline-date">Outubro de 2019 – Outubro de 2020</span>
        </div>
      </div>
    </section>
  )
}
