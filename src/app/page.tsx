import Form from "@/components/Form";
import Table from "@/components/Table";
import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
  return (
    <section>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content=" Employee Management Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/* collapsable form */}
        <div className="container mx-auto py-5">
          <Form />
        </div>

        {/* table */}
        <div className="container mx-auto">
          <Table />
        </div>
      </main>
    </section>
  );
}
