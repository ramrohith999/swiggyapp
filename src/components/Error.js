import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err= useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
          <h3 className="text-xl text-gray-700">
            {err.status} : {err.statusText}
          </h3>
          <p className="text-gray-500 mt-2">
            Please try refreshing the page or come back later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow transition"
          >
            Reload Page
          </button>
        </div>
      );
}

export default Error;