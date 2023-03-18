import { motion } from "framer-motion";
import { moon } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-5 flex flex-col md:flex-row md:justify-center items-center gap-5 ">
        <div className=" md:w-1/2 flex flex-col">
          <h1 className={`text-white ${styles.heroHeadText}`}>
            Olá, meu nome é <span className="text-[#915EFF]">Leonardo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Sou desenvolvedor Full-Stack
          </p>
        </div>
        <motion.div
          className="md:w-1/2 md:mt-0 mt-10 flex animate-pulse"
          animate={{
            translateY: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={moon} alt="Monkey On moon" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
