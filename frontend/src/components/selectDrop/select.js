import React, { useState } from "react";
import './select.css';
import { IoIosArrowDown } from "react-icons/io";

// Category open and close function
function Select(props) {

  const [isOpenSelect, setOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectItem, setSelectItem] = useState(props.placeholder);

  const OpenSelect = () => {
    setOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setSelectedIndex(index);
    setOpenSelect(false);
    setSelectItem(name);
  };

  // category filter function
  const [listData] = useState(props.data || []);
  const [listData2, setListData2] = useState(props.data || []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    const list = listData.filter((item) => {
      return item.toLowerCase().includes(keyword);
    });

    setListData2(list);
  };

  return (
    <div className="selectDrop cur">

      <span className="openSelect" onClick={OpenSelect}>
        {selectItem}
      </span>

      {props.Icon || <IoIosArrowDown />}

      {isOpenSelect === true && (
        <div className="selectDro">

          <div className="searchField">
            <input
              type="text"
              placeholder="Search here..."
              className="inputField"
              onChange={filterList}
            />
          </div>

          <ul className="searchResult">
            {listData2.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => closeSelect(index, item)}
                  className={`${selectedIndex === index ? 'active' : ''}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>

        </div>
      )}

    </div>
  );
}

export default Select;