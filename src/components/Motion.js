import { motion } from 'framer-motion'

const Motion = ({ children }) => (
    <motion.div
        initial={{ opacity: 0,filter: "blur(10px)"}}
        whileInView={{ opacity: 1,  }}
        animate={{ filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(5px)" }}
        transition={{
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1]
        }}
    >
        {children}
    </motion.div>
)

export default Motion
