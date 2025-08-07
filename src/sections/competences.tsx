import React from 'react'

import { FaGear } from "react-icons/fa6";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Competences() {
  return (
    <section>
      <h2><FaGear /> Principais Competências</h2>
      <Carousel
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
      >
        <div className="card">
          <h3>Java | Spring Framework</h3>
          <p>
            Minha principal linguagem de especialização,
            utilizada no desenvolvimento de <b>APIs REST</b> e
            automação de processos. Tenho experiência com
            arquiteturas complexas, como motores de
            orquestração de jobs e microsserviços robustos.
          </p>
        </div>
        <div className="card">
          <h3>PostgreSQL, Oracle, SQL Server</h3>
          <p>
            <b>PostgreSQL</b> é meu banco de dados de
            preferência, graças à sua robustez e
            escalabilidade. No entanto, também atuei com
            <b> Oracle</b> e <b>SQL Server</b> em ambientes corporativos
            diversos.
          </p>
        </div>
        <div className="card">
          <h3>JavaScript & TypeScript | React & React Native</h3>
          <p>
            Desde o início da carreira, utilizei JavaScript para
            entregar soluções ágeis. Com o tempo, adotei o
            TypeScript como padrão, especialmente em
            aplicações frontend com <b>React</b> e <b>React Native</b>.
          </p>
          <p>
            Me especializei em frameworks robustos como
            <b> React</b> e <b>React Native</b>, com os quais entreguei
            soluções modernas e performáticas.
          </p>
        </div>
        <div className="card">
          <h3>HTML E CSS</h3>
          <p>
            Impossível citar minha experiência frontend, sem
            citar a base estrutural da tecnologia.
          </p>
          <p>
            Atuo com HTML e CSS desde o primeiro dia de
            minha carreira e, considero que acumulei uma
            sólida experiência ao longo desse período.
          </p>
        </div>
        <div className="card">
          <h3>Infraestrutura</h3>
          <p>
            Nunca tive o foco em me especializar em
            infraestrutura, porém sempre tive o interesse na
            área.
          </p>
          <p>
            Ao longo de minha jornada, acumulei experiência
            em configuração de servidores, automação de
            deploys com <b>Docker</b> e <b>Kubernetes</b>, além da
            utilização prática dos serviços cloud da <b>AWS</b>,
            como <b>EC2</b>, <b>S3</b> e <b>RDS</b> (dentre outros).
          </p>
        </div>
      </Carousel>
    </section>
  )
}
