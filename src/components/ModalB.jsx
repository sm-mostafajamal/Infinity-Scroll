import React, { useState } from "react";
import Buttons from "./Buttons";
import { useQuery } from "react-query";
import { getAll } from "../server/contactServer";

const ModalB = () => {
  const [checked, setChecked] = useState(false);
  const [close, setClose] = useState(false);
  const { isLoading, data } = useQuery("contacts", getAll);
  const style = close ? { display: "none" } : { display: "" };

  return (
    <div style={style}>
      <Buttons />

      <button onClick={() => setClose(!close)}>Close</button>
      <input
        type="checkbox"
        value={checked}
        onChange={(e) => setChecked(!checked)}
      />
      <span>Only Even</span>
      {isLoading ? (
        <span>...Loading</span>
      ) : checked ? (
        data.results.map((contact) => {
          if (contact.id % 2) {
            return (
              contact.country.name === "United States" && (
                <div key={contact.id}>
                  <span style={{ paddingRight: "20px" }}>
                    Country: {contact.country.name}
                  </span>
                  <span>Phone:{contact.phone}</span>
                </div>
              )
            );
          }
        })
      ) : (
        data.results.map(
          (contact) =>
            contact.country.name === "United States" && (
              <div key={contact.id}>
                <span style={{ paddingRight: "20px" }}>
                  Country: {contact.country.name}
                </span>
                <span>Phone:{contact.phone}</span>
              </div>
            )
        )
      )}
    </div>
  );
};

export default ModalB;
