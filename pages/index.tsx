import type { NextPage } from "next";
import { BasicTable } from "../components/BasicTable";
import { FilteringTable } from "../components/FilteringTable";
import { PaginationTable } from "../components/PaginationTable";
import { SortingTable } from "../components/SortingTable";

const Home: NextPage = () => {
  return (
    <div>
      <PaginationTable></PaginationTable>
    </div>
  );
};

export default Home;
