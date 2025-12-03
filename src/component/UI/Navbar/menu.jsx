import {
  LayoutDashboard,
  ChartNoAxesColumn,
  BrickWallShield,
  CalendarCheck,
  CalendarDays,
  SendHorizontal,
  Bell,
  Settings,
} from "lucide-react";
import MenuItem from "./Menu-Item";

function Menu() {
  return (
    <section className="flex flex-col space-y-2 p-6 mt-4">
      <MenuItem icon={LayoutDashboard} text={"Dashboard"} />
      <MenuItem icon={ChartNoAxesColumn} text={"Analytics"} location={'/analysis'}/>
      <MenuItem icon={BrickWallShield} text={"Invoice"} location={'/invoice'}/>
      <MenuItem icon={CalendarCheck} text={"Schedule"} location={'/schedule'}/>
      <MenuItem icon={CalendarDays} text={"Calender"} location={'/calender'}/>
      <MenuItem icon={SendHorizontal} text={"Message"} />
      <MenuItem icon={Bell} text={"Notification"} />
      <MenuItem icon={Settings} text={"Setting"} location={'/setting'}/>
    </section>
  );
}

export default Menu;
