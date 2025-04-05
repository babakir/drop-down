import React, { useState, useRef } from "react";
import { IOption } from "./interfaces";
import "./dropDown.scss";
import useOutsideClick from "../../hooks/useOutsideClick";
import InputBox from "./InputBox";
import Options from "./Options";

export default function DropDown() {
  const [options, setOptions] = useState<IOption[]>([
    { value: "Education 🎓", label: "Education 🎓" },
    { value: "Yeeeah, science! 👩‍🚀", label: "Yeeeah, science! 👩‍🚀" },
    { value: "Art 🎭", label: "Art 🎭" },
    { value: "Sport ⚽️", label: "Sport ⚽️" },
    { value: "Games 🎮", label: "Games 🎮" },
    { value: "Health 🏥", label: "Health 🏥" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  const toggleRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleAddNew = () => {
    const trimmed = newItem.trim();
    if (!trimmed) return;

    const exists = options.find((option) => option.value === trimmed);
    if (!exists) {
      const newOption = { value: trimmed, label: trimmed };
      setOptions((prev) => [...prev, newOption]);
    }

    handleSelect(trimmed);
    setNewItem("");
  };

  useOutsideClick(dropdownRef, toggleRef, () => setIsOpen(false));

  return (
    <div className="multi-select-dropdown">
      <InputBox
        isOpen={isOpen}
        toggleRef={toggleRef}
        newItem={newItem}
        setNewItem={setNewItem}
        onAddNew={handleAddNew}
        onClick={(value: boolean) => setIsOpen(value)}
      />
      {isOpen && (
        <Options
          dropdownRef={dropdownRef}
          options={options}
          selected={selected}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
