import React from 'react'

import { IoMdSchool } from "react-icons/io";

import UsfLogo from '../assets/usf-logo.png';
import EtecLogo from '../assets/etecvav-logo.png';

export default function Education() {
  return (
    <section>
      <h2><IoMdSchool /> Formação Acadêmica</h2>
      <div className="education-wrapper">
        <div className="card" style={{ display: 'flex', flex: 1, margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
            <img src={EtecLogo} alt="Universidade São Francisco" style={{ width: '70px', height: 'auto', borderRadius: '12px' }} />
          </div>
          <div>
            <h3>ETEC Vasco Antonio Venchiarutti</h3>
            <span style={{fontStyle: 'italic', color: "#777"}}>Janeiro de 2016 – dezembro de 2018</span>
            <p>Técnico em Informática, integrado ao Ensino médio.</p>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', flex: 1, margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
            <img src={UsfLogo} alt="Universidade São Francisco" style={{ width: '80px', height: 'auto', borderRadius: '12px' }} />
          </div>
          <div>
            <h3>Universidade São Francisco</h3>
            <span style={{fontStyle: 'italic', color: "#777"}}>Julho de 2019 – agosto de 2023</span>
            <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
