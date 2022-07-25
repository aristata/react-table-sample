import type { NextPage } from "next";
import { BasicTable } from "../components/BasicTable";
import { FilteringTable } from "../components/FilteringTable";
import { SortingTable } from "../components/SortingTable";

const Home: NextPage = () => {
  return (
    <div>
      <FilteringTable></FilteringTable>
    </div>
  );
};

export default Home;
