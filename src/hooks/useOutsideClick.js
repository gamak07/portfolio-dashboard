import { useEffect, useRef, useState } from "react";

export const useOutsideClick = () => {
  const [isOpen, setIsOpen] = useState(null);
  const dropdownRef = useRef(null);
  const ignoreRef = useRef([]);

  const toggleDropdown = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setIsOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideDropdown = dropdownRef.current?.contains(event.target);
      const clickedIgnore = ignoreRef.current.some((ref) =>
        ref?.contains(event.target),
      );
      if (!clickedInsideDropdown && !clickedIgnore) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    dropdownRef,
    toggleDropdown,
    closeDropdown,
    registerIgnoreRef: (ref) => {
      ignoreRef.current.push(ref);
    },
    clearIgnoreRefs: () => {
      ignoreRef.current = [];
    },
  };
};
