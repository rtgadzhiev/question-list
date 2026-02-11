import AccordionBody from '../AccordionBody/AccordionBody';
import AccordionTrigger from '../AccordionTrigger/AccordionTrigger';
import Arrow from '../Arrow/Arrow';
import Metrics from '../Metrics/Metrics';
import QuestionDropdown from '../QuestionDropdown/QuestionDropdown';
import arrow from '../../assets/images/icons/accordion-arrow-icon.svg';
import styles from './QuestionsAccordionItem.module.css';
import { useRef } from 'react';

function QuestionsAccordionItem({ question, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  return (
    <li className={styles.accordionItem}>
      <AccordionTrigger isOpen={isOpen} onToggle={onToggle}>
        <p className={styles.title}>{question.title}</p>
        <Arrow className={styles.arrow} isOpen={isOpen} arrow={arrow} />
      </AccordionTrigger>
      <AccordionBody bodyRef={bodyRef} isOpen={isOpen}>
        <div className={styles.bodyHeader}>
          <Metrics rate={question.rate} complexity={question.complexity} />
          <QuestionDropdown />
        </div>
        <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }}></div>
        <div>Ссылка со стрелкой</div>
      </AccordionBody>
    </li>
  );
}

export default QuestionsAccordionItem;
