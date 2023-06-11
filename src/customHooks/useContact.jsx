import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAll } from "../server/contactServer";
const useContact = () => {
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(["contacts", page], () => getAll(page));

  useEffect(() => {
    if (isLoading) return;
    return setAllData((prevData) => [...prevData, ...data.results]);
  }, [isLoading, data]);

  return { isLoading, allData, setPage };
};

export default useContact;
