import React from "react";

function Error() {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        fontWeight: "bold",
      }}
    >
      Page Not Found
    </div>
  );
}

export default Error;
