import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3,faHtml5,faReact,faBootstrap,faGithub,faPhp } from "@fortawesome/free-brands-svg-icons";
import javaScript from '../../assets/img/javascript.png'
import css from '../../assets/img/css.png'
import html from '../../assets/img/html.png'
import react from '../../assets/img/react.svg'
import php from '../../assets/img/php_.png'
import Card from './components/Card'
import './skill.css';

const Skill = () => {
  return (
    <section className='container-skills'>
    <Card srcIcon={faHtml5} bgColor={'#F0DB4F'} description={'Java Script'}/>
    <Card srcIcon={faReact} bgColor={'#00d8ff'} description={'React'}/> 
    <Card srcIcon={faCss3} bgColor={'#2965f1'} description={'Css'}/>
    <Card srcIcon={faHtml5} bgColor={'#e34f26'} description={'Html5'}/> 
    <Card srcIcon={faBootstrap} bgColor={'#6610f2'} description={'Bootstrap'}/>
    <Card srcIcon={faGithub} bgColor={'#333'} description={'Git/GitHub'}/>
    <Card srcIcon={faPhp} bgColor={'#787CB5'} description={'Php'}/>
    <Card srcIcon={faDatabase} bgColor={'#F29111'} description={'Mysql'}/>
    </section>
  )
}

export default Skill
