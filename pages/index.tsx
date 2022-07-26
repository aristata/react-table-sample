import type { NextPage } from "next";
import { BasicTable } from "../components/BasicTable";
import { ColumnHiding } from "../components/ColumnHiding";
import { ColumnOrder } from "../components/ColumnOrder";
import { FilteringTable } from "../components/FilteringTable";
import { PaginationTable } from "../components/PaginationTable";
import { RowSelection } from "../components/RowSelection";
import { SortingTable } from "../components/SortingTable";

const Home: NextPage = () => {
  return (
    <div>
      <ColumnHiding></ColumnHiding>
    </div>
  );
};

export default Home;
