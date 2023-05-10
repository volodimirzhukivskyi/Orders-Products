import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const ActiveSessionsCounter = () => {
  const [activeSessions, setActiveSessions] = useState(0);

  useEffect(() => {
    const socket = io();
    socket.on("activeTabsUpdate", (count) => {
      setActiveSessions(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Active Sessions: {activeSessions}</h1>
    </div>
  );
};

export default ActiveSessionsCounter;
