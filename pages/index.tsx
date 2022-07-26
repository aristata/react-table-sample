import type { NextPage } from "next";
import { BasicTable } from "../components/BasicTable";
import { ColumnOrder } from "../components/ColumnOrder";
import { FilteringTable } from "../components/FilteringTable";
import { PaginationTable } from "../components/PaginationTable";
import { RowSelection } from "../components/RowSelection";
import { SortingTable } from "../components/SortingTable";

const Home: NextPage = () => {
  return (
    <div>
      <ColumnOrder></ColumnOrder>
    </div>
  );
};

export default Home;
