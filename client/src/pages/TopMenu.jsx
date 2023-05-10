import React from "react";
import { DateTimer } from "../components/Date";
import ActiveSessionsCounter from "../components/ActionSesionCounter";

const TopMenu = () => {
  return (
    <>
      <ActiveSessionsCounter />
      <DateTimer />
    </>
  );
};
export default TopMenu;
