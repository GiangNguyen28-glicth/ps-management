import { psImg } from "../../../common";

type Props = {};
const JIRA_MENU = [
  {
    text: "Profile",
    link: "/",
  },
  {
    text: "Personal settings",
    link: "/",
  },
  {
    text: "Notifications",
    link: "/",
  },
];
export const AccountMenu = (props: Props) => {
  return (
    <div className="flex flex-col shadow-2xl overflow-auto min-w-60 border-3 border-gray-200 rounded">
      <div className="border-b border-black border-opacity-50">
        <p className="p-2.5 text-xs font-bold text-gray-500">Account</p>
        <div className="flex flex-1/2 items-center px-4">
          <img className="w-6 h-6 p-0.5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={psImg}></img>
          <div className="flex flex-col p-2">
            <p>Giang</p>
            <span className="text-xs">giangnguyen3246@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col border-b">
        <p className="py-2 px-4 font-bold text-gray-500 text-xs">Jira</p>
        {JIRA_MENU.map((item, index) => {
          return (
            <div className="py-1" key={index}>
              <p className="px-4 py-1 hover:cursor-pointer hover:bg-gray-200">{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="py-2">
        <p className="px-4 py-2 w-full hover:cursor-pointer hover:bg-gray-200">Logout</p>
      </div>
    </div>
  );
};

export default AccountMenu;
