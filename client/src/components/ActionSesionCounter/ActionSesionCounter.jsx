import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import {Badge} from "react-bootstrap";

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
      <h3>
        Active Sessions: <Badge bg="secondary">{activeSessions}</Badge>
      </h3>

    </div>
  );
};

export default ActiveSessionsCounter;
