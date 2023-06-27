import Head from "next/head";
import Table from "../components/Table";
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
  return (
    <section className="px-5">
      <Head>
        <title>CRUD Application</title>
      </Head>
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>
        <div className="contanie mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-5">
            <button className="flex bg-indigo-500 text-white py-2 px-4 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
              Add Employee
              <span className="px-1">
                <BiUserPlus size={24} />
              </span>
            </button>
          </div>
          {/* collapsble form*/}
        </div>

        {/* table */}
        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </section>
  );
}
