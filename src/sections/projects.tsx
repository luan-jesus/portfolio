import React from 'react'

import Carousel from 'react-multi-carousel'
import { MdDashboard } from "react-icons/md";

export default function Projects() {
  return (
    <section>
      <h2><MdDashboard size={20} /> Projetos Pessoais</h2>
      <Carousel
        arrows
        autoPlay
        autoPlaySpeed={3000}
        draggable
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 1,
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
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        shouldResetAutoplay
        infinite
        slidesToSlide={1}
        swipeable
      >
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>Anafit</h3>
            <p>
              Agenda eletronica para gerir, acompanhar e ter histórico de treinos e compromissos focados na área fit.
              É possível cadastrar treinos, exercícios, e lançamentos avulsos, e visualizar o histórico em formato de agenda.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>Credfacil</h3>
            <p>
              Aplicativo android nativo, utilizado para cadastrar e gerenciar clientes e motoboys. Com esses cadastros, o gestor
              do aplicativo, pode realizar emprestimos para esses clientes, e acompanhar o status de cada emprestimo.
              O motoboy, por sua vez, pode acompanhar as parcelas que ele tem que receber, e o status de cada uma delas.
              No fim, o gestor consegue acompanhar o status de cada motoboy, e o status de cada cliente.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>Credfacil Cliente</h3>
            <p>
              Aplicativo andoid nativo, utilizado pelos clientes do Credfacil, onde eles podem acompanhar o status de seus emprestimos,
              e o status de cada parcela. Além disso, eles podem solicitar novos emprestimos.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>PersonalFinances</h3>
            <p>
              Aplicativo web, que permite ao usuário gerenciar suas finanças pessoais de forma simples e eficiente.
              O usuário pode cadastrar suas receitas e despesas, e acompanhar o saldo da sua conta em tempo real.
              Além disso, o aplicativo oferece relatórios e gráficos para ajudar o usuário a visualizar seus gastos e economias.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>ScopeDefragmentation</h3>
            <p>
              Aplicativo CLI responsável por realizar a desfragmentação de disco em banco de dados SQL Server.
              Ele analisa os índices de uma base de dados, identifica quais estão fragmentados e executa a desfragmentação
              de forma eficiente, melhorando o desempenho das consultas e operações no banco.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>DatingApp</h3>
            <p>
              Aplicativo web responsivo. Uma plataforma de encontros que permite aos usuários criar perfis, buscar e se conectar com outras pessoas.
              Os usuários podem enviar mensagens, curtir perfis e participar de eventos online.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>ConteudoSim</h3>
            <p>
              Página estática, que apresenta o projeto ConteudoSim e disponibiliza informações sobre o mesmo.
              O projeto ConteudoSim é uma iniciativa para promover a inclusão digital e o acesso à tecnologia 
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
        <div className="project" style={{ height: 500 }}>
          <div className="project-content">
            <h3>UltimateJsGame</h3>
            <p>
              Jogo de plataforma feito em javascript puro, onde o jogador controla um personagem que deve desviar dos inimigos e coletar itens de power-up.
              Quanto mais tempo o jogador sobrevive, mais difícil o jogo fica, com inimigos mais rápidos e mais itens para coletar. Logo sua pontuação aumenta.
              O objetivo é sobreviver o máximo possível e alcançar a maior pontuação.
              O jogo possui um rank global de pontuação, onde os jogadores podem comparar suas pontuações com as de outros jogadores.
            </p>
          </div>
          <div>
            <div style={{ width: '100%', height: '100%', backgroundColor: '#333', borderRadius: '12px' }}></div>
          </div>
        </div>
      </Carousel>
    </section>
  )
}
