import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ handleClick }) {
    const { docs } = useFirestore("images");
    return (
        <div className="img-grid">
            {docs &&
                docs.map((doc) => {
                    return (
                        <motion.div
                            className="img-wrap"
                            key={doc.id}
                            whileHover={{ opacity: 0.9 }}
                            layout
                        >
                            <motion.img
                                src={doc.url}
                                alt="gatitos cats cat gato gatito"
                                onClick={() => handleClick(doc.url)}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            />
                        </motion.div>
                    );
                })}
        </div>
    );
}

export default ImageGrid;
