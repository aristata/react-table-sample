import React, { InputHTMLAttributes, useMemo } from "react";
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
    gotoPage, // 특정 페이지로 이동하는 헬퍼 펑션
    pageCount,
    state, // 테이블에 대한 상태들을 가지고 있다 -> index.d.ts 656 line -> UsePaginationState
    setPageSize, // state 에 있는 pageSize 를 변환 시키는 헬퍼 펑션
    prepareRow
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const changePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pageNumber = e.target.value ? +e.target.value - 1 : 0;
    gotoPage(pageNumber);
  };

  const changePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(+e.target.value);
  };

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
        <span>
          | Go to page:{" "}
          <input
            type={"number"}
            defaultValue={pageIndex + 1}
            onChange={changePage}
            style={{ width: "50px" }}
          ></input>
        </span>
        <select value={pageSize} onChange={changePageSize}>
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          이전 페이지
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          다음 페이지
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};
