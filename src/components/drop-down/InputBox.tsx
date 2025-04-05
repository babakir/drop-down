import React from "react";
import { classNames } from "../../utilities/classNames";
import AngleDownIcon from "../../icons/AngleDown.Icon";

interface Props {
  isOpen: boolean;
  toggleRef: React.RefObject<HTMLDivElement | null>;
  newItem: string;
  setNewItem: (value: string) => void;
  onAddNew: () => void;
  onClick: (value: boolean) => void;
}

export default function InputBox({
  isOpen,
  toggleRef,
  newItem,
  setNewItem,
  onAddNew,
  onClick,
}: Props) {
  return (
    <div
      ref={toggleRef}
      className={classNames("input-box", isOpen && "active")}
    >
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onClick={() => onClick(true)}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onAddNew();
          }
        }}
      />
      <span className={classNames("arrow", isOpen && "rotate")} onClick={() => onClick(!isOpen)}>
        <AngleDownIcon />
      </span>
    </div>
  );
}
