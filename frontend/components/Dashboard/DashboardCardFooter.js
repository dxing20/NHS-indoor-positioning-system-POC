import Titleicon from "../Titleicon";
import IconButton from "../IconButton";
import { ArrowRightOutlined } from "@ant-design/icons";

const CardFooter = ({ tabName, link }) => {
  return (
    <Titleicon
      iconLink={<IconButton icon={<ArrowRightOutlined />} link={link} />}
      titleLink={<a href={link} style={{ color: "black" }}>{tabName}</a>}
    />
  );
}

export default CardFooter;