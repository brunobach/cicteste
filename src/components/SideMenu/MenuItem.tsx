import * as React from "react";
import { motion } from "framer-motion";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#0061ff", "#548cc6", "#b6c62c", "#6e6e6e"];

export const MenuItem = ({ i, conteudo, children }: any) => {
  const style = { color: `${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="li-menu"
    >
      <div className="icon-placeholder" >{children}</div>
      <div className="text-placeholder" style={style}>{conteudo}</div>
    </motion.li>
  );
};
