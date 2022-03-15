import drawerStyles from "../../styles/Hamburger.module.css";

const Hamburger = props => {
  const handleLogout = () => {
    authService.logout();
  }

  let drawerClasses = ["sidedrawer"];

  if (props.show) {
    drawerClasses = ["sidedrawer", "open"];
  }

  const drawerOpen = props.show ? drawerStyles.open : ''

  return (
    <nav className={drawerStyles.sidedrawer + ' ' + drawerOpen}>
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/roomHistory">Room History</a></li>
        <li><a href="/patientHistory">Patient History</a></li>
        <li><a onClick={handleLogout}>Log Out</a></li>

      </ul>
    </nav>
  );
}

export default Hamburger;
