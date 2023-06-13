import React, { useEffect, useState } from "react";

type DropDownProps = {
  roles: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  roleSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  roles,
  roleSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the role
   * back to the parent component
   *
   * @param role  The selected role
   */
  const onClickHandler = (role: string): void => {
    roleSelection(role);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {roles.map((role: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(role);
              }}
            >
              {role}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
