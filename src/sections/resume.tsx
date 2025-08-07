import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Resume() {
  return (
    <section className="intro">
      <img src="img/profile.jpg" alt="Foto de perfil" className="profile-pic" />

      <h1>Luan de Jesus Teixeira</h1>
      <p className="subtitle">Full Stack Developer | Java & JavaScript</p>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/luan-jesus" target="_blank"><FaLinkedin color='#0a66c2' /> LinkedIn</a>
        <a href="https://github.com/luan-jesus" target="_blank"><FaGithub color="#000" /> GitHub</a>
        <a href="https://wa.me/5519993134501?text=Olá, tudo bem?" target="_blank"><FaWhatsapp color='#26d466' /> WhatsApp</a>
      </div>
    
      <p className="description">
        Sou um entusiasta da tecnologia, movido pelo desafio de transformar ideias em soluções práticas para
        problemas do mundo real. Minha jornada na programação começou oficialmente aos 16 anos, durante
        um curso técnico, quando descobri minha paixão por escrever código e criar sistemas. Desde então, a
        tecnologia deixou de ser apenas um interesse para se tornar minha vocação.
      </p>
      <p className="description">
        Atuei em diversos projetos — tanto pessoais quanto profissionais — e, nos últimos quatro anos, venho
        me dedicando ao setor de meios de pagamento, com foco em soluções contábeis e regulatórias.
      </p>
      <p className="description">
        Acredito que inovação, aprendizado contínuo e colaboração são pilares essenciais para gerar
        impacto positivo e duradouro no ambiente em que atuo.
      </p>
    </section>
  )
}
