import React, { useState } from "react";
import DropDown from "./DropDown";

const Role: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectRole, setSelectRole] = useState<string>("");
  const roles = () => {
    return ["Tuteur", "Etudiant"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * role from the child component
   *
   * @param role  The selected role
   */
  const roleSelection = (role: string): void => {
    setSelectRole(role);
  };

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>
          {selectRole ? "Select: " + selectRole : "Choisissez votre role"}{" "}
        </div>
        {showDropDown && (
          <DropDown
            roles={roles()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            roleSelection={roleSelection}
          />
        )}
      </button>
    </>
  );
};

export default Role;
