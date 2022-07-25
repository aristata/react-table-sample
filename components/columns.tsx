import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name"
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name"
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    // @ts-ignore
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy/MM/dd");
    }
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country"
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone"
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter
      }
    ]
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        // @ts-ignore
        Cell: ({ value }) => {
          return format(new Date(value), "yyyy/MM/dd");
        },
        Filter: ColumnFilter
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnFilter
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        Filter: ColumnFilter
      }
    ]
  }
];
