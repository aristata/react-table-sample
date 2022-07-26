import type { NextPage } from "next";
import { BasicTable } from "../components/BasicTable";
import { FilteringTable } from "../components/FilteringTable";
import { PaginationTable } from "../components/PaginationTable";
import { RowSelection } from "../components/RowSelection";
import { SortingTable } from "../components/SortingTable";

const Home: NextPage = () => {
  return (
    <div>
      <RowSelection></RowSelection>
    </div>
  );
};

export default Home;
