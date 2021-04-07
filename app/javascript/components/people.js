import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Person } from "./person";
import fetchPeople from "../query_data/fetchPeople";

export const People = () => {
  const [currentPeople, setPeople] = useState([]);
  const [totalPeopleCount, setTotalPeopleCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const columns = ["name", "date", "number", "description"].map((column) => ({
    field: column,
    width: column.length * 60,
  }));
  useEffect(() => {
    fetchPeople(currentPage + 1, ({ total_count, data }) => {
      setTotalPeopleCount(total_count);
      setPeople(data);
    });
  }, [currentPage]);

  return (
    <div style={{ height: currentPeople.length * 60, width: "80%" }}>
      <DataGrid
        page={currentPage}
        rows={currentPeople}
        columns={columns}
        pageSize={currentPeople.length}
        rowCount={totalPeopleCount}
        paginationMode="server"
        onPageChange={(params) => {
          setCurrentPage(params.page);
        }}
      />
    </div>
  );
};
