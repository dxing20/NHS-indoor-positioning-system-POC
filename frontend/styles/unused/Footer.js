import Image from "next/image";
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel" className="logo" />
      </a>
    </footer>
  );
}

export default Footer;