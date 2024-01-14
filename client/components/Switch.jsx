'use client'
import React from "react";
import { motion } from "framer-motion";

import '@/app/globals.css'

const Switch = function({ isOn, className  , ...props }) {
    const classNamee = `switch ${isOn == true ? "on" : "off"} ${className} `;
  
    return (
      <motion.div animate className={classNamee} {...props}>
        <motion.div animate />
      </motion.div>
    );
  }


  export default Switch;


