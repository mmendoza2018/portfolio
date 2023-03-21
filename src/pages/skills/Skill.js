import React from 'react'
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3,faHtml5,faReact,faBootstrap,faGithub,faPhp, faNodeJs } from "@fortawesome/free-brands-svg-icons";

import Card from './components/Card'
import firebase from '../../assets/img/firebase.svg';
import jest from '../../assets/img/jest.svg';
import tailwind from '../../assets/img/tailwind.svg';
import './skill.css';

const Skill = () => {
  return (
    <section id='skills' className='container-general-skills'>
    <h2>Habilidades</h2>
    <div className='container-skills'>
    <Card srcIcon={faHtml5} bgColor={'#F0DB4F'} description={'Java Script'}/>
    <Card srcIcon={faReact} bgColor={'#00d8ff'} description={'React'}/> 
    <Card srcIcon={faNodeJs} bgColor={'#44883e'} description={'Node'}/>
    <Card srcIcon={faCss3} bgColor={'#2965f1'} description={'Css'}/>
    <Card srcIcon={faHtml5} bgColor={'#e34f26'} description={'Html5'}/> 
    <Card srcIcon={faBootstrap} bgColor={'#6610f2'} description={'Bootstrap'}/>
    <Card srcIcon={tailwind} bgColor={null} description={'Tailwind'}/>
    <Card srcIcon={faGithub} bgColor={'#333'} description={'Git/GitHub'}/>
    <Card srcIcon={firebase} bgColor={null} description={'Firebase'}/>
    <Card srcIcon={jest} bgColor={null} description={'Jest'}/>
    <Card srcIcon={faPhp} bgColor={'#787CB5'} description={'Php'}/>
    <Card srcIcon={faDatabase} bgColor={'#F29111'} description={'Mysql'}/>
    </div>
    </section>
  )
}

export default Skill
