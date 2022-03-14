import { Button } from "antd";
import mainStyles from "../styles/Home.module.css"

const IconButton = ({icon, link}) => {
	return (
		<Button type="text" href={link} className={mainStyles.logo}>
			{icon}
		</Button>
	);
}
 
export default IconButton;