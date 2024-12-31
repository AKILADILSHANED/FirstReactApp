import React from "react";
import { getMovies } from "../libs/apis/sever";

export default async function Dashboard() {
  const movie = await getMovies();

  return (
    <div>
      <div className="flex flex-row h-[60px] border-none bg-slate-500 items-center shadow-xl">
        <div className=" flex font-serif mt-1 ml-3 mr-3 bg-slate-400 font-bold text-2xl h-[40px] rounded-lg w-[100px] text-white justify-center hover:bg-slate-600 shadow-lg shadow-white">
          <label className="mt-1">Mflix</label>
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[70px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          Home
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[80px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          Movies
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[110px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          TV Shows
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[110px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          Favourites
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[105px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          Watchlist
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[120px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          My Account
        </div>

        <div className="font-serif mt-1 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[90px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          Log Out
        </div>

        <div>
          <input
            type="text"
            placeholder="Search your Movies here"
            className="rounded-md h-8 mt-2 ml-[50px] w-[250px] text-center hover:ring-blue-700"
          />
        </div>

        <div className="font-serif mt-2 ml-3 mr-2 font-bold text-lg text-white bg-slate-400 h-[30px] w-[50px] text-center rounded-lg shadow-md shadow-white hover:bg-slate-600">
          Go
        </div>
      </div>

      <div className="bg-slate-500 min-h-screen mt-2 grid grid-cols-5 gap-1">
        {movie.map((element) => 
          <div
            className="bg-slate-300 mt-5 ml-3 mb-5 rounded-xl w-[245px] hover:shadow-md hover:shadow-white hover:bg-slate-200"
            key={element.id}>
            {element.name}
          </div>
        )}

      </div>
    </div>
  );
}
