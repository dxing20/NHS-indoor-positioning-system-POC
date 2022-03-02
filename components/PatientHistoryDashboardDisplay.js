import CardFooter from "./CardFooter";
import Titleicon from "./Titleicon";
import mainStyles from "../styles/Home.module.css"
import navStyles from "../styles/Nav.module.css"
import { FontSizeOutlined } from "@ant-design/icons";

const PatientHistoryDashboardDisplay = () => {
  return (
    <div>
      <Titleicon
        iconLink={<a href='/patientHistory'><img src="/avatar.ico" alt="avatar-icon" className={navStyles.Titleicon} /></a>}
        titleLink={
          <h2>
            <a href='/patientHistory' style={{ color: '#000', fontSize: 20 }} >Patient History</a>
          </h2>
        }
      />

      <div className={mainStyles.cardDesc}>
        <h4>John Doe</h4>
        <p>Left GP Room</p>

        <h4>Willem Dafoe</h4>
        <p>Entered Psych Ward</p>

        <h4>James White</h4>
        <p>Left Operating Ward A</p>
      </div>
      <div className={mainStyles.cardFooter}>
        <CardFooter tabName="View all Patient History" link="/patientHistory" />
      </div>
    </div>
  );
}

export default PatientHistoryDashboardDisplay;