import React from 'react'; 

const MeasurementForm = () => {
  
  return (    
    <div>
      <div>
      <div class="w-48 flex flex-col p-4 m-2 bg-purple-200 h-24  rounded-lg shadow-md">
    <div class="text-2xl font-bold text-purple-800"></div>
    <div class=" m-2 space-x-5 ">
      <button
        class="px-2 py-2 font-bold text-white bg-purple-500 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline-blue"
        onclick="selectedOption = option1"
      >
        {/* {{ option1 }} */}male
      </button>
      <button
        class="px-2 py-2 font-bold  text-white bg-purple-500 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline-red"
        onclick="selectedOption = option2"
      >
        {/* {{ option2 }} */}female
      </button>
    </div>
    <div class="mt-4 text-xl font-bold text-purple-800" v-if="selectedOption">
      {/* You selected: {{ selectedOption }} */}
    </div>
  </div>
      </div>

    <div className="mx-auto max-w-lg  -mt-20 mb-5 rounded-lg shadow-purple-500 shadow-lg overflow-hidden ">
      <h1 className='font-bold text-2xl text-purple-700 m-5 '> Measurements</h1>
    <form className="grid grid-cols-2 gap-4 m-6">
      <div className="col-span-1 m-2">
        <label htmlFor="measurement1" className="block text-purple-700 text-sm font-bold mb-2">
          coller
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement1"
          name="measurement1"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Sholder width
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          sleeves length
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          bicep
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          wrist
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          wrist
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          armpit
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          chest
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          waist
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          stomach
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          shirt length
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Pant waist
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Hips
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Crotch
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Thigh
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Calf
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-1 m-2">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          Pant length
        </label>
        <input
          type="number"
          placeholder="size in inches"
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="col-span-2 m-2 mb-4">
        <label htmlFor="measurement2" className="block text-purple-700 text-sm font-bold mb-2">
          No. of pairs
        </label>
        <input
          type="number"
          placeholder="number of pair "
          id="measurement2"
          name="measurement2"
          className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-500/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100 mt-12 ">Order</button>
      </div>
    </form>
    </div>
  </div>

  );
};

export default MeasurementForm;
