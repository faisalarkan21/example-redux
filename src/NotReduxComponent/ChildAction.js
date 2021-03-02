import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ActionSetting } from "./ChildActionSetting";

export const ActionButton = () => {
  return [
    <ActionSetting />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ];
};
