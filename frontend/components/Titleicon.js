import titleiconStyles from '../styles/Titleicon.module.css'

const Titleicon = ({iconLink, titleLink}) => {
    return (
      <div className={titleiconStyles.container}>
        <div className={titleiconStyles.logo} >
          {iconLink}
        </div>
        <div className={titleiconStyles.navtitle}>
          {titleLink}
        </div>
      </div>
    );
}
 
export default Titleicon;