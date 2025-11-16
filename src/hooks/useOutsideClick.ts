import { useEffect, useRef, useState } from "react";

export const useOutsideClick = () => {
  const [isOpen, setIsOpen] = useState<string | number|null>(null);
  const dropdownRef = useRef<HTMLElement | null>(null);
  const ignoreRef = useRef<(HTMLElement | null)[]>([]);

  const toggleDropdown = (index:string|number) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  const closeDropdown = () => {
    setIsOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      const target = event.target as Node
      const clickedInsideDropdown = dropdownRef.current?.contains(target);
      const clickedIgnore = ignoreRef.current.some((ref) =>
        ref?.contains(target),
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
    registerIgnoreRef: (ref:HTMLElement | null) => {
      ignoreRef.current.push(ref);
    },
    clearIgnoreRefs: () => {
      ignoreRef.current = [];
    },
  };
};
