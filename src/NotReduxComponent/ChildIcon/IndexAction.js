import { ActionEdit } from "./ChildActionEdit";
import { ActionEllipsis } from "./ChildActionEllipsis";
import { ActionSetting } from "./ChildActionSetting";
export const ActionButton = (enabler) => {

  const finalButtons = [];

  enabler.setting && finalButtons.push(<ActionSetting />);
  enabler.edit && finalButtons.push(<ActionEdit />);
  enabler.ellipsis && finalButtons.push(<ActionEllipsis />);

  return finalButtons;
};