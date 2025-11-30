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
      <MenuItem icon={ChartNoAxesColumn} text={"Analytics"} />
      <MenuItem icon={BrickWallShield} text={"Invoice"} />
      <MenuItem icon={CalendarCheck} text={"Schedule"} />
      <MenuItem icon={CalendarDays} text={"Calender"} />
      <MenuItem icon={SendHorizontal} text={"Message"} />
      <MenuItem icon={Bell} text={"Notification"} />
      <MenuItem icon={Settings} text={"Setting"} />
    </section>
  );
}

export default Menu;
