import React, { RefObject, useEffect } from "react";

export default function useOutsideClick(
  dropdownRef: RefObject<HTMLDivElement | null>,
  toggleRef: RefObject<HTMLDivElement | null>,
  cb: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        cb();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [dropdownRef, toggleRef, cb]);
}
