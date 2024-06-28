import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-10 mt-14 md:grid-cols-3 lg:grid-cols-4">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center w-48 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span className="mt-2 text-center">{technology.name}</span>
          </div>
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, '');
