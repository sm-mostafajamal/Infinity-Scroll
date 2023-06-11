import React, { useCallback, useRef, useState } from "react";
import Buttons from "./Buttons";
import useContact from "../customHooks/useContact";

const ModalA = () => {
  const [checked, setChecked] = useState(false);
  const [close, setClose] = useState(false);
  const style = close ? { display: "none" } : { display: "" };

  const { isLoading, allData, setPage } = useContact();

  const observerRef = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // console.log("visible");
          return setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [isLoading]
  );
  const handleScroll = () => {};

  // console.log(allData);
  // console.log(observerRef);

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
      <div onScroll={handleScroll}>
        {isLoading ? (
          <span>...Loading</span>
        ) : checked ? (
          allData.map((contact) => {
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
          allData.map((contact, index) => {
            if (allData.length === index + 1) {
              return (
                <div key={contact.id} ref={lastElementRef}>
                  <span style={{ paddingRight: "20px" }}>
                    Country: {contact.country.name}
                  </span>
                  <span>Phone:{contact.phone}</span>
                </div>
              );
            } else {
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
        )}
      </div>
      {/* <button onClick={() => setPage(page + 1)}>next</button> */}
      {/* {data.results} */}
    </div>
  );
};

export default ModalA;
