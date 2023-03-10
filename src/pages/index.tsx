import type { NextPage } from "next";
import { trpc } from "@/client/utils/trpc";

const HomePage: NextPage = () => {
  const { data, isLoading, isFetching, error, isError } =
    trpc.getHello.useQuery();

  console.log(data);
  if (isLoading || isFetching) {
    return <p>Loading ....</p>;
  }
  return (
    <section className="bg-ct-blue-600 min-h-screen pt-20">
      <div
        className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-ce
    items-center"
      >
        {data?.message}
      </div>
    </section>
  );
};

export default HomePage;
