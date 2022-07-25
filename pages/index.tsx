import type { NextPage } from "next";
import { BasicTable } from "../components/BasicTable";
import { SortingTable } from "../components/SortingTable";

const Home: NextPage = () => {
  return (
    <div>
      <SortingTable></SortingTable>
    </div>
  );
};

export default Home;
