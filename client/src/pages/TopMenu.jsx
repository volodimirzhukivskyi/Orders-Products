import React from "react";
import { DateTimer } from "../components/Date/Date";
import ActiveSessionsCounter from "../components/ActionSesionCounter/ActionSesionCounter";

const TopMenu = () => {
  return (
    <>
      <ActiveSessionsCounter />
      <DateTimer />
    </>
  );
};
export default TopMenu;
