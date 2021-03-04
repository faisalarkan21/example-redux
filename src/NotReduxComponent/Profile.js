import { Avatar, Card } from "antd";
import { useEffect, useState } from "react";

/**
 * @TODO
 * di komponent ActionButton
 */
import { ActionButton } from "./ChildIcon/IndexAction";

const { Meta } = Card;

function Profile(props) {
  const [enable, setEnable] = useState("");

  useEffect(() => {
    if (props.children === "Faisal Arkan") {
      setEnable({ ellipsis: true, setting: true, edit: true });
      return;
    }
    setEnable(false);
  }, []);

  return (
    <Card
      title={props.children}
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={ActionButton(enable)}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default Profile;
