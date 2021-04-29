import React from "react";
import { motion } from "framer-motion";

function Modal({ src, hideModal }) {
    return (
        <motion.div
            className="backdrop"
            onClick={hideModal}
            inital={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={src}
                alt="large"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
}

export default Modal;
