import styles from './Skill.module.css';
import image from '../../../assets/images/skill-mock-image.svg';

function Skill({ imageSrc = image, title }) {
  return (
    <div className={styles.skill}>
      <img
        className={styles.image}
        src={imageSrc}
        alt=""
        width="20"
        height="20"
      />
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default Skill;
