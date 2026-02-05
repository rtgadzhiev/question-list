import Container from '../Container/Container';
import Copyright from '../../components/Copyright/Copyright';
import Logo from '../../components/Logo/Logo';
import Socials from '../../components/Socials/Socials';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContent}>
        <Logo isTextLight={true} />
        <h3 className={styles.footerTitle}>
          Выбери, каким будет IT завтра, вместе с нами
        </h3>
        <p className={styles.footerDescription}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.footerBottom}>
          <Copyright />
          <span className={styles.footerSocialsDescription}>
            Ищите нас и в других соцсетях @yeahub_it
          </span>
          <Socials />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
