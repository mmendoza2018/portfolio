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
import {
  faCss3,
  faHtml5,
  faReact,
  faBootstrap,
  faGithub,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import Alert from "../../components/alert/Alert";
let alertDefault = {
  title: "",
  description: "",
  type: "success",
  status: false,
};
const Index = () => {
  let [isOpen1, openModal1, closeModal1] = useModals();
  let [isOpen3, openModal3, closeModal3] = useModals();
  const [alert, setAlert] = useState(alertDefault);
  const [idBody, setidBody] = useState(1);
  let listSkills = [
    [
      {
        descripcion: "React",
        icon: faReact,
        boxIcon: false,
      },
      {
        descripcion: "JavaScript",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "Css",
        icon: faCss3,
        boxIcon: false,
      },
      {
        descripcion: "Tailwind",
        icon: "tailwind-css",
        boxIcon: true,
      },
      {
        descripcion: "GitHub",
        icon: faGithub,
        boxIcon: false,
      },
    ],
    [
      {
        descripcion: "html",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "Css",
        icon: faCss3,
        boxIcon: false,
      },
      {
        descripcion: "Bootstrap",
        icon: faBootstrap,
        boxIcon: false,
      },
      {
        descripcion: "JavaScript",
        icon: faHtml5,
        boxIcon: false,
      },
    ],
    [
      {
        descripcion: "html",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "Css",
        icon: faCss3,
        boxIcon: false,
      },
      {
        descripcion: "Bootstrap",
        icon: faBootstrap,
        boxIcon: false,
      },
      {
        descripcion: "JavaScript",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "GitHub",
        icon: faGithub,
        boxIcon: false,
      },
      {
        descripcion: "Firebase",
        icon: 'firebase',
        boxIcon: true,
      },
    ],
    [
      {
        descripcion: "JavaScript",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "Css",
        icon: faCss3,
        boxIcon: false,
      },
      {
        descripcion: "Tailwind",
        icon: "tailwind-css",
        boxIcon: true,
      },
      {
        descripcion: "GitHub",
        icon: faGithub,
        boxIcon: false,
      },
    ],
    [
      {
        descripcion: "JavaScript",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "Css",
        icon: faCss3,
        boxIcon: false,
      },
      {
        descripcion: "Bootstrap",
        icon: faBootstrap,
        boxIcon: false,
      },
      {
        descripcion: "GitHub",
        icon: faGithub,
        boxIcon: false,
      },
      {
        descripcion: "Php",
        icon: faPhp,
        boxIcon: false,
      },
      {
        descripcion: "Mysql",
        icon: faDatabase,
        boxIcon: false,
      },
    ],
    [
      {
        descripcion: "JavaScript",
        icon: faHtml5,
        boxIcon: false,
      },
      {
        descripcion: "Css",
        icon: faCss3,
        boxIcon: false,
      },
      {
        descripcion: "Bootstrap",
        icon: faBootstrap,
        boxIcon: false,
      },
      {
        descripcion: "GitHub",
        icon: faGithub,
        boxIcon: false,
      },
      {
        descripcion: "Php",
        icon: faPhp,
        boxIcon: false,
      },
      {
        descripcion: "Mysql",
        icon: faDatabase,
        boxIcon: false,
      },
    ],
  ];
  const refContainer = useRef(null);
  const refScroll = useRef(null);
  const [direction, setDirection] = useState("bottom");
  const directionScroll = (e) => {
    var scrollPos = 0;
    refScroll.current.addEventListener("scroll", function () {
      let valor =
        refContainer.current.getBoundingClientRect().top > scrollPos
          ? "top"
          : "bottom";
      scrollPos = refContainer.current.getBoundingClientRect().top;
      if (valor === "top") {
        setDirection("top");
      } else {
        setDirection("bottom");
      }
    });
  };
  useEffect(() => {
    directionScroll();
  }, []);

  const renderContentModal = (id) => {
    setidBody(id);
  };
  const activeAlert = (title, descripction, type, time) => {
    let newObjetcAlert = {
      title: title,
      description: descripction,
      type: type,
      status: true,
    };
    setAlert(newObjetcAlert);
    setTimeout(() => {
      newObjetcAlert = {
        title: title,
        description: descripction,
        type: type,
        status: false,
      };
      setAlert(newObjetcAlert);
    }, time);
  };
  return (
    <>
      <Background />
      <Alert
        description={alert.description}
        title={alert.title}
        type={alert.type}
        status={alert.status}
      />
      <div className="container-general" ref={refScroll}>
        <main
          ref={refContainer}
          className={`main-general ${isOpen1 || isOpen3 ? "hidden" : ""}`}
        >
          <Presentation />
          <Portfolio
            openModal3={openModal3}
            renderContentModal={renderContentModal}
          />
          <About />
          <Skill />
          <Comments openModal1={openModal1} />
          <Contact activeAlert={activeAlert} />
        </main>
      </div>
      <Sidebar />
      <Modal
        isOpen={isOpen1}
        openModal={openModal1}
        closeModal={closeModal1}
        size={"modal-sm"}
      >
        <FormComment activeAlert={activeAlert} closeModal={closeModal1} />
      </Modal>
      <Modal
        isOpen={isOpen3}
        openModal={openModal3}
        closeModal={closeModal3}
        size={"modal-lg"}
      >
        <BodyModal listSkills={listSkills} idBody={idBody} />
      </Modal>
      <Footer direction={direction} />
    </>
  );
};

export default Index;
