import LineGraph from "../components/LineGraph";
import ChartMap from "../components/MapChart";

const Charts: React.FC = () => {
  return (
    <>
      <div className="bg-gray-300">
        {/* Header--------- */}
        <header className="bg-gray-900 text-white text-center">
          <div className="container mx-auto py-4 px-8">
            <h1 className="text-xl font-bold">Charts And Maps</h1>
          </div>
        </header>
        {/* side bar start----------------- */}
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full top-10 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <ul className="space-y-2 font-medium mt-10">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">Contacts</span>
                </a>
              </li>
              <li>
                <a
                  href="/charts"
                  className="flex items-center p-2 text-gray-900 rounded-lg text-white bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Charts and Maps
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/* side bar end---------- */}
        <div className="p-4 sm:ml-64">
          <h1 className="text-xl font-bold text-center bg-gray-400">
            Line Chart
          </h1>
          <LineGraph />
          <h1 className="text-xl font-bold text-center bg-gray-400">
            Map Chart
          </h1>
          <ChartMap />
        </div>
      </div>
    </>
  );
};

export default Charts;
