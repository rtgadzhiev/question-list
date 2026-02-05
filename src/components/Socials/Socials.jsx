import figmaIcon from '../../assets/images/icons/socials/figma-icon.svg';
import githubIcon from '../../assets/images/icons/socials/github-icon.svg';
import styles from './Socials.module.css';
import telegramIcon from '../../assets/images/icons/socials/telegram-icon.svg';
import tiktokIcon from '../../assets/images/icons/socials/tiktok-icon.svg';
import youtubeIcon from '../../assets/images/icons/socials/youtube-icon.svg';

const socials = [
  { id: 1, title: 'Figma', icon: figmaIcon },
  { id: 2, title: 'Telegram', icon: telegramIcon },
  { id: 3, title: 'YouTube', icon: youtubeIcon },
  { id: 4, title: 'TikTok', icon: tiktokIcon },
  { id: 5, title: 'GitHub', icon: githubIcon },
];

function Socials() {
  return (
    <nav>
      <ul className={styles.socialsList}>
        {socials.map((item) => (
          <li key={item.id}>
            <a href="">
              <img
                className={styles.socialsIcon}
                src={item.icon}
                alt={item.title}
                width="24"
                height="24"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Socials;
