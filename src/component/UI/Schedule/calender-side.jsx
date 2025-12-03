import Button from "../../../Utils/Home/button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function CalenderSide() {
  return (
    <section className="basis-2/6 bg-white rounded-md">
      <div className="">
        <Button text={"Create Schedule"} />
      </div>

      {/* calender section start  */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      {/* calender section end  */}
    </section>
  );
}

export default CalenderSide;
