import { toggoleTheme } from "@/store/themeSwitcher.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DarkModeToggleBtn = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const toggleDarkMode = (e) => {
    setChecked((prevState) => {
      return (prevState = e.target.checked);
    });
    dispatch(toggoleTheme(checked));
  };

  return (
    <label
      htmlFor="small-toggle"
      className="inline-flex relative items-center  cursor-pointer"
    >
      {checked}
      <input
        type="checkbox"
        value={checked}
        id="small-toggle"
        className="sr-only peer"
        onChange={toggleDarkMode}
        checked={checked}
      />
      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-800  after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500" />
    </label>
  );
};

DarkModeToggleBtn.displayName = "DarkModeToggleBtn";

export default DarkModeToggleBtn;
