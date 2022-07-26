import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";

export const PaginationTable = () => {
  // useMemo 를 사용하는 이유는 리렌더링시 리소스 낭비를 막기 위해서
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // 페이징 된 데이터
    nextPage, // 다음 페이지 헬퍼 펑션
    previousPage, // 이전 페이지 헬퍼 펑션
    canNextPage, // 다음 페이지가 있는지에 대한 boolean
    canPreviousPage, // 이전 페이지가 있는지에 대한 boolean
    pageOptions,
    state, // 테이블에 대한 상태들을 가지고 있다 -> index.d.ts 656 line -> UsePaginationState
    prepareRow
  } = useTable(
    {
      // @ts-ignore
      columns,
      data
    },
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          이전 페이지
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          다음 페이지
        </button>
      </div>
    </>
  );
};
