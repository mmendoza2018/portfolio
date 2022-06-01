import React, { useEffect, useRef, useState } from "react";
import Background from "../../components/background/Background";
import About from "../about/About";
import Comments from "../comments/Comments";
import Portfolio from "../portfolio/Portfolio";
import Presentation from "../presentation/Presentation";
import Skill from "../skills/Skill";
import "./index.css";
import Footer from "./components/Footer";
import Contact from "../contact/Contact";
import { Sidebar } from "./components/Sidebar";
import { Modal } from "../../components/modal/Modal";
import FormComment from "../comments/components/FormComment";
import useModals from "../../hooks/useModal";
import BodyModal from "../portfolio/components/BodyModal";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3,faHtml5,faReact,faBootstrap,faGithub,faPhp } from "@fortawesome/free-brands-svg-icons";

const Index = () => {
  let [isOpen1,openModal1,closeModal1] = useModals();
  let [isOpen2,openModal2,closeModal2] = useModals();
  let [isOpen3,openModal3,closeModal3] = useModals();
  const [idBody, setidBody] = useState(1)
  let listSkills = [
      [
        {
          descripcion:"React",
          icon:faReact
        },
        {
          descripcion:"Css",
        icon:faCss3
        },
        {
          descripcion:"Bootstrap",
        icon:faBootstrap
        },
        {
          descripcion:"GitHub",
        icon:faGithub
        }
      ],
      [
        {
          descripcion:"html",
          icon:faHtml5
        },
        {
          descripcion:"Css",
        icon:faCss3
        },
        {
          descripcion:"Bootstrap",
        icon:faBootstrap
        },
        {
          descripcion:"JavaScript",
          icon:faHtml5
        },
      ],
      [
        {
          descripcion:"html",
          icon:faHtml5
        },
        {
          descripcion:"Css",
        icon:faCss3
        },
        {
          descripcion:"Bootstrap",
        icon:faBootstrap
        },
        {
          descripcion:"JavaScript",
          icon:faHtml5
        },
        {
          descripcion:"GitHub",
        icon:faGithub
        }
        
      ],
      [
        {
          descripcion:"css",
        icon:faCss3
        },
        {
          descripcion:"css",
        icon:faCss3
        }
      ],
      [
        {
          descripcion:"css",
        icon:faCss3
        },
        {
          descripcion:"css",
        icon:faCss3
        }
      ],
      [
        {
          descripcion:"css",
        icon:faCss3
        },
        {
          descripcion:"css",
        icon:faCss3
        }
      ],
  ];
  const refContainer = useRef(null)
  const refScroll = useRef(null)
  const [direction, setDirection] = useState("bottom");
    const directionScroll = (e) => {
      var scrollPos = 0;
      refScroll.current.addEventListener('scroll', function(){
        let valor = refContainer.current.getBoundingClientRect().top > scrollPos ? "top" : "bottom";
        scrollPos = refContainer.current.getBoundingClientRect().top;
        if (valor === "top") {
          setDirection("top");
        } else {
          setDirection("bottom");
        }
      })
      };
    useEffect(() => {
      directionScroll();
    }, [])
    
    const renderContentModal = (id) => {
      setidBody(id)
    }
  return (
    <>
      <Background />
      <div className="container-general" ref={refScroll}>
        <main ref={refContainer} className="main-general">
          <Presentation />
          <Portfolio openModal3={openModal3} renderContentModal={renderContentModal}/>
          <About />
          <Skill />
          <Comments openModal1={openModal1} />
          <Contact />
        </main>
      </div>
      <Sidebar />
      <Modal isOpen={isOpen1} openModal={openModal1} closeModal={closeModal1} size={'modal-sm'}>
        <FormComment />
      </Modal>
      <Modal isOpen={isOpen2} openModal={openModal2} closeModal={closeModal2} size={'modal-sm'}>
        <FormComment />
      </Modal>
      <Modal isOpen={isOpen3} openModal={openModal3} closeModal={closeModal3} size={'modal-lg'}>
      <BodyModal listSkills={listSkills} idBody={idBody}/>
    </Modal>
      <Footer direction={direction} />
    </>
  );
};

export default Index;
