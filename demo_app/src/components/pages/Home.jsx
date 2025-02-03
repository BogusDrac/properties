import Search from "../Search";


const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 
      flex flex-col relative">
      <main className="flex-1">
        <Search />
      </main>
    </div>
  );
};

export default Home;
