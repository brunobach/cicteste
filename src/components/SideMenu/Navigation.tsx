import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MdTranslate, MdQueuePlayNext, MdMouse, MdSms } from "react-icons/md";
import { scroller } from "react-scroll";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

function scrollTo(elemento: string) {
  scroller.scrollTo(elemento, {
    duration: 300,
    delay: 0,
    smooth: "easeOutQuart",
  });
}

export const Navigation = () => (
  <motion.ul className="ul-menu" variants={variants}>
    <div onClick={() => scrollTo("video")}>
      <MenuItem i={0} conteudo="Apresentaçao">
        <MdQueuePlayNext color="#0061ff" size="40px" />
      </MenuItem>
    </div>
    <div onClick={() => scrollTo("funcionalides")}>
    <MenuItem i={1} conteudo="Funcionalidades">
      <MdMouse color="#548cc6" size="40px" />
    </MenuItem>
    </div>
    <div onClick={() => scrollTo("contato")}>
    <MenuItem i={2} conteudo="Contato">
      <MdSms color="#b6c62c" size="40px" />
    </MenuItem>
    </div>
    <MenuItem i={3} conteudo="Inglês">
      <MdTranslate color="#6e6e6e" size="40px" />
    </MenuItem>
  </motion.ul>
);
