import { memo, useCallback } from 'react';

import AccordionBody from '../AccordionBody/AccordionBody';
import AccordionTrigger from '../AccordionTrigger/AccordionTrigger';
import Arrow from '../Arrow/Arrow';
import ArrowLink from '../ArrowLink/ArrowLink';
import Metrics from '../Metrics/Metrics';
import QuestionDropdown from '../QuestionDropdown/QuestionDropdown';
import arrow from '../../assets/images/icons/accordion-arrow-icon.svg';
import styles from './QuestionsAccordionItem.module.css';

const QuestionsAccordionItem = memo((props) => {
  const { question, isOpen, onToggle, questionId } = props;

  const handleToggle = useCallback(() => {
    onToggle(questionId);
  }, [onToggle, questionId]);

  return (
    <li className={styles.accordionItem}>
      <AccordionTrigger isOpen={isOpen} onToggle={handleToggle}>
        <p className={styles.title}>{question.title}</p>
        <Arrow className={styles.arrow} isOpen={isOpen} arrow={arrow} />
      </AccordionTrigger>
      <AccordionBody isOpen={isOpen}>
        <div className={styles.bodyHeader}>
          <Metrics rate={question.rate} complexity={question.complexity} />
          <QuestionDropdown />
        </div>
        <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }}></div>
        <ArrowLink className={styles.link} title={'Подробнее'} />
      </AccordionBody>
    </li>
  );
});

export default QuestionsAccordionItem;
