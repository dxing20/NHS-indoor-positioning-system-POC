import Image from "next/image";
import Titleicon from "../Titleicon";
import CardFooter from "./DashboardCardFooter";
import navStyles from '../../styles/Nav.module.css'
import mainStyles from "../../styles/Home.module.css"

const DashboardWrapper = ({ title, iconLink, iconImg, iconAlt, graph, cardfooterdesc }) => {
  return (
    <div className={mainStyles.DashboardWrapperContainer}>
      <Titleicon
        iconLink={<a href={iconLink}><Image src={iconImg} alt={iconAlt} width="35" height="35" className={navStyles.Titleicon} /></a>}
        titleLink={<a href={iconLink} style={{ color: '#000', fontSize: 20 }}>{title}</a>}
      />
      <div className={mainStyles.cardContainer}>
        {graph}
      </div>
      <div className={mainStyles.cardFooter}>
        <CardFooter tabName={cardfooterdesc} link={iconLink} />
      </div>
    </div>
  );
}

export default DashboardWrapper;