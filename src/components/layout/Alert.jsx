import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx={12} cy={12} r={10}></circle>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        )}
        <p className="text-red-500">
          <strong>{alert.msg}</strong>:
        </p>
      </p>
    )
  );
}

export default Alert;
