import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center p-5  justify-between bg-indigo-600 text-white">
      <div className="text-3xl font-semibold">React App</div>
      <div className="flex items-center gap-5">
        <div>
          <select className="text-black rounded-md p-2 text-lg" name="" id="">
            <option value="asc">artan</option>
            <option value="desc">azalan</option>
          </select>
        </div>
        <div>
          <input
            className="bg-gray-200 rounded-md p-2 outline-none"
            type="text"
            placeholder="Arama yapınız.."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 rounded-full h-10 flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
