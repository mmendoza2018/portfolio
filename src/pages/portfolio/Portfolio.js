import React from 'react'
import Title from 'react-vanilla-tilt';
import { Card } from './components/Card';
import dplace from '../../assets/img/dplace3.png'
import wordpress from '../../assets/img/wordpress.png'
import stripe from '../../assets/img/stripe.jpg'
import ong from '../../assets/img/ong5.png'
import conovatec from '../../assets/img/conovatec.jpg'
import './portfolio.css';

const Portfolio = () => {
  return (
    <section className='container-portfolio'>
      <Card srcImg = {conovatec} altImg={'imagen xd'}/>
      <Card srcImg = {wordpress} altImg={'imagen xd'}/>
      <Card srcImg = {dplace} altImg={'imagen xd'}/>
      <Card srcImg = {stripe} altImg={'imagen xd'}/>
      <Card srcImg = {ong} altImg={'imagen xd'}/>
      <Card srcImg = {ong} altImg={'imagen xd'}/>
    </section>
  )
}

export default Portfolio
