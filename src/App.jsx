import React, {useState} from "react"

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="bg-slate-800 h-screen text-white">
      <div className="max-w-4xl mx-auto pt-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl mb-10">CALCULATOR</h1>
            <div className="grid grid-cols-4 gap-2 text-2xl p-5 bg-sky-950 border">
              <input 
              className="col-span-4 row-span-3 h-24 bg-black mb-1 text-white text-xl flex items-center px-5 font-mono text-wrap"
              type="text"
              value={value}
              />
              {/* Row 1 */}
              <button 
                class="h-20 font-bold flex items-center justify-center col-span-2 bg-red-600 hover:bg-red-700 rounded-lg"
                onClick={e => setValue(value.slice(0,-1))}
              >
                Delete
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-lg"
                onClick={e => setValue("")}
              >
                AC
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-sky-600 hover:bg-gray-400 rounded-lg"
                value={"*"}
                onClick={e => setValue(value + e.target.value)}
              >
                *
              </button>
              {/* Row 2 */}
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={7}
                onClick={e => setValue(value + e.target.value)}
              >
                7
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={8}
                onClick={e => setValue(value + e.target.value)}
              >
                8
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={9}
                onClick={e => setValue(value + e.target.value)}
              >
                9
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-sky-600 hover:bg-sky-700 rounded-lg"
                value={"/"}
                onClick={e => setValue(value + e.target.value)}
              >
                /
              </button>
              {/* Row 3 */}
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={4}
                onClick={e => setValue(value + e.target.value)}
              >
                4
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={5}
                onClick={e => setValue(value + e.target.value)}
              >
                5
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={6}
                onClick={e => setValue(value + e.target.value)}
              >
                6
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-sky-600 hover:bg-sky-700 rounded-lg"
                value={"-"}
                onClick={e => setValue(value + e.target.value)}
              >
                -
              </button>
              {/* Row 4 */}
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={1}
                onClick={e => setValue(value + e.target.value)}
              >
                1
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={2}
                onClick={e => setValue(value + e.target.value)}
              >
                2
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={3}
                onClick={e => setValue(value + e.target.value)}
              >
                3
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-sky-600 hover:bg-sky-700 rounded-lg"
                value={"+"}
                onClick={e => setValue(value + e.target.value)}
              >
                +
              </button>
              {/* Row 5 */}
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={"."}
                onClick={e => setValue(value + e.target.value)}
              >
                .
              </button>
              <button 
                class="w-20 h-20 font-bold flex items-center justify-center bg-gray-500 hover:bg-gray-400 rounded-lg"
                value={0}
                onClick={e => setValue(value + e.target.value)}
              >
                0
              </button>
              <button 
                class="h-20 font-bold flex items-center justify-center bg-sky-600 hover:bg-sky-700 col-span-2 rounded-lg"
                onClick={e => setValue(eval(value))}
              >
                =
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
