import React, { useState } from "react";
import Buttons from "./Buttons";
import { useQuery } from "react-query";
import { getAll } from "../server/contactServer";

const ModalA = () => {
  const [checked, setChecked] = useState(false);
  const [close, setClose] = useState(false);
  const page = 2;
  const { isLoading, data } = useQuery(["contacts", page], () => getAll(page));
  const style = close ? { display: "none" } : { display: "" };
  console.log(data);
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
              <div key={contact.id}>
                <span style={{ paddingRight: "20px" }}>
                  Country: {contact.country.name}
                </span>
                <span>Phone:{contact.phone}</span>
              </div>
            );
          }
        })
      ) : (
        data.results.map((contact) => (
          <div key={contact.id}>
            <span style={{ paddingRight: "20px" }}>
              Country: {contact.country.name}
            </span>
            <span>Phone:{contact.phone}</span>
          </div>
        ))
      )}

      {/* {data.results} */}
    </div>
  );
};

export default ModalA;
