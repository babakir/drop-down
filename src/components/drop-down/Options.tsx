import React from "react";
import { IOption } from "./interfaces";
import { classNames } from "../../utilities/classNames";
import CheckIcon from "../../icons/Check.Icon";

interface Props {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  options: IOption[];
  selected: string[];
  onSelect: (value: string) => void;
}

export default function Options({
  dropdownRef,
  options,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="options">
        {options.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <div
              key={option.value}
              className={classNames("option", isSelected && "selected")}
              onClick={() => onSelect(option.value)}
            >
              <span className="label">{option.label}</span>
              {isSelected && <CheckIcon />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
