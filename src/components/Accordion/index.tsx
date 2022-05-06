import { motion, AnimatePresence } from 'framer-motion';
import { ContentAccordion } from '../ContentAccordion';

export function Accordion({
  accordionActive,
  title,
  description,
  expanded,
  setExpanded,
}: {
  accordionActive: number | boolean;
  title: string;
  description: string;
  expanded: boolean | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | boolean>>;
}) {
  const isOpen = accordionActive === expanded;

  return (
    <>
      <motion.header
        initial={false}
        // animate={{ boxShadow: isOpen ? '#FF0088' : '0 1rem 3rem rgba(0,0,0,.175)!important' }}
        onClick={() => setExpanded(isOpen ? false : accordionActive)}
        style={{
          boxShadow: '0 1rem 3rem rgba(0,0,0,.175)!important',
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px',
          marginTop: '15px',
          height: '60px',
          cursor: 'pointer',
        }}
      >
        <span style={{ color: '#212227', fontWeight: 'bold' }}>{title}</span>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: { durantion: 0.4 },
              },
            }}
          >
            <ContentAccordion description={description} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
