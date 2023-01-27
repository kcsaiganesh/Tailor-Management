import React, { useState } from 'react';
import axios from 'axios';

const TailorPriceEstimator = () => {



  const [measurements, setMeasurements] = useState({
    top: '',
    bottom: '',
    set: '',
    fabric: '',
    measurements: {
      collor: '',
      sholderwidth: '',
      sleeveslenght: '',
      wrist: '',
      bicep: '',
      armpit: '',
      chest: '',
      waist: '',
      shirtlenght: '',
      pantwaist: '',
      hips: '',
      crotch: '',
      tigh: '',
      calf: '',
      pantlength: '',
      unisexsize: '',
      nopairs: ''
    },

  });
  const [success, setSuccess] = useState(0);
  const [price, setPrice] = useState(0);


  const postMeasurements = (measurements) => {
    axios.post('/orders', measurements, price)
      .then(response => {
        console.log(response)
        setSuccess('Ordered successfully');
        if (success) {
          alert("Ordered successfully");
        }
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMeasurements((prevState) => ({
      ...prevState,
      [name]: value,
      measurements: {
        ...prevState.measurements,
        [name]: value
      },
    }));

    // Calculate the price based on the measurements, cloth type, and dress type
    const totalPrice = calculatePrice(measurements.top, measurements.bottom, measurements.fabric, measurements.set, measurements.unisexsize, measurements.nopairs);
    setPrice(totalPrice);
    setMeasurements.price("price");


    // postMeasurements(measurements);
  };
  // const handleinputs = (e) => {
  //   const { name: measurementName, value: measurementValue } = e.target;
  //   setMeasurements((prevState) => ({
  //     ...prevState,
  //     [measurementName]: measurementValue

  //   }));

  // }
  const calculatePrice = (top, bottom, fabric, set, unisexsize, nopairs) => {

    let totalPrice = 0;
    switch (nopairs) {
      case (parseInt(nopairs) <= 0):
        totalPrice = 0;
        alert("Number of pairs should be atleast 1");
        break;
      case (nopairs > 0):
        totalPrice *= nopairs;
        break;
      default:
        totalPrice *= 1;

    }
    switch (top) {
      case 'NA':
        totalPrice += 0;
        break;
      case 'shirt':
        totalPrice += 200;
        break;
      case 'Tshirt':
        totalPrice += 100;
        break;
      case 'sweat-shirt':
        totalPrice += 250;
        break;
      case 'jacket':
        totalPrice += 300;
        break;
      case 'suit':
        totalPrice += 400;
        break;
      case 'Formal-shirt':
        totalPrice += 250;
        break;
      default:
        totalPrice += 0;

    }

    switch (bottom) {
      case 'pant':
        totalPrice += 400;
        break;
      case 'trouser':
        totalPrice += 450;
        break;
      case 'trackpants':
        totalPrice += 400;
        break;
      case 'joggers':
        totalPrice += 350;
        break;
      case 'formalpants':
        totalPrice += 450;
        break;
      default:
        totalPrice += 0;
    }

    switch (set) {
      case 'NA':
        totalPrice += 0
        break;
      case 'blazerset':
        totalPrice += 1000;
        break;
      case 'formalset':
        totalPrice += 1000;
        break;
      default:
        totalPrice += 0;
    }

    switch (fabric) {
      case 'cotton':
        totalPrice += 200;
        break;
      case 'linen':
        totalPrice += 100;
        break;
      case 'silk':
        totalPrice += 200;
        break;
      default:
        totalPrice += 200;
    }

    switch (unisexsize) {
      case 'xs':
        totalPrice += 200;
        break;
      case 'm':
        totalPrice += 250;
        break;
      case 'l':
        totalPrice += 300;
        break;
      case 'xl':
        totalPrice += 350;
        break;
      case '2xl':
        totalPrice += 400;
        break;
      default:
        totalPrice += 350;


    }
    return totalPrice;
  };

  return (
    <>
      <h1 className="mt-3  text-purple-700 hover:leaading-loose ml-44 subpixel-antialiased  uppercase font-bold text-2xl underline underline-offset-4 hover:no-underline  "> measurements</h1>
      <form className="mb-8 grid grid-cols-2 gap-4 ml-auto mr-auto mt-3 rounded-xl border p-5 shadow-md w-9/12 bg-white" onSubmit={handleSubmit}>

        <div className="col-span-auto  ">

          <label className="block text-sm font-medium text-purple-700 m-1" htmlFor="fabric">Cloth Type :</label>
          <select className=" relative w-full cursor-default rounded-md border border-purple-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm" type="text" id="fabric" name="fabric" value={measurements.fabric} onChange={handleSubmit}>
            <option value="cotton">cotton</option>
            <option value="silk">silk</option>
            <option value="linen">linen</option>
          </select>

          <br />
          <label className="block text-sm font-medium text-purple-700 m-1" htmlFor="set">Dress Type:</label>
          <select className="relative w-full cursor-default rounded-md border border-purple-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm" type="text" id="set" name="set" value={measurements.set} onChange={handleSubmit}>
            <option value="NA">NA</option>
            <option value="suit">suit </option>
            <option value="formalset">Formal-set</option>
          </select>
          <br />
          <label className="block text-sm font-medium text-purple-700 m-1" htmlFor="top">Top:</label>
          <select className="relative w-full cursor-default rounded-md border border-purple-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm" type="text" id="Top" name="top" value={measurements.top} onChange={handleSubmit}>
            <option value="NA">NA</option>
            <option value="shirt">shirt </option>
            <option value="Tshirst">Tshirst</option>
            <option value="sweat-shirt">sweat shirt</option>
            <option value="jacket">jacket</option>
            <option value="suit">suit </option>
            <option value="Formal-shirt">Formal shirt</option>
            <option value="blazer">blazer </option>
          </select>
          <br />
          <label className="block text-sm font-medium text-purple-700 m-1" htmlFor="bottom">Bottom:</label>
          <select className="relative w-full cursor-default rounded-md border border-purple-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm" type="text" id="bottom" name="bottom" value={measurements.bottom} onChange={handleSubmit} >
            <option value="NA">NA</option>
            <option value="pant">pant</option>
            <option value="trosure">trosure</option>
            <option value="trackpants">trackpants</option>
            <option value="joggers">joggers</option>
            <option value="formalpant">formalpant</option>
          </select>
          <div className=" mt-24 block p-6 rounded-lg shadow-2xl bg-white max-w-sm">
            <div className=" flex flex-col">
              <label className="mt-3  text-purple-700 text-xl font-semibold  text-m">Estimated-Amount</label>
              <label className="text-purple-400 text-xl font-normal"> price is ₹ {price} </label>
              <button
                onClick={postMeasurements}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-purple-500/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100 mt-3">confirm order</button>

            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 gap-3">
          <div className="col-start ">
            <label htmlFor="collor" className="block text-purple-700 text-sm font-bold mb-2">
              coller
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="collor"
              name="collor"
              disabled={null}
              value={measurements.measurements.collor}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto ">
            <label htmlFor="sholderwidth" className="block text-purple-700 text-sm font-bold mb-2">
              Sholder width
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="sholderwidth"
              name="sholderwidth"
              value={measurements.measurements.sholderwidth}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="sleeveslenght" className="block text-purple-700 text-sm font-bold mb-2">
              sleeves length
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="sleeveslenght"
              name="sleeveslenght"
              value={measurements.measurements.sleeveslenght}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="bicep" className="block text-purple-700 text-sm font-bold mb-2">
              bicep
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="bicep"
              name="bicep"
              value={measurements.measurements.bicep}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="wrist" className="block text-purple-700 text-sm font-bold mb-2">
              wrist
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="wrist"
              name="wrist"
              value={measurements.measurements.wrist}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="armpit" className="block text-purple-700 text-sm font-bold mb-2">
              armpit
            </label>
            <input
              type="number"
              placeholder="size in inches" shirt
              id="armpit"
              name="armpit"
              value={measurements.measurements.armpit}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="chest" className="block text-purple-700 text-sm font-bold mb-2">
              chest
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="chest"
              name="chest"
              value={measurements.measurements.chest}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="waist" className="block text-purple-700 text-sm font-bold mb-2">
              waist
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="waist"
              name="waist"
              value={measurements.measurements.waist}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="stomach" className="block text-purple-700 text-sm font-bold mb-2">
              stomach
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="stomach"
              name="stomach"
              value={measurements.measurements.stomach}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="shirtlenght" className="block text-purple-700 text-sm font-bold mb-2">
              shirt length
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="shirtlenght"
              name="shirtlenght"
              value={measurements.measurements.shirtlenght}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="pantwaist" className="block text-purple-700 text-sm font-bold mb-2">
              Pant waist
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="pantwaist"
              name="pantwaist"
              value={measurements.measurements.pantwaist}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="hips" className="block text-purple-700 text-sm font-bold mb-2">
              Hips
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="hips"
              name="hips"
              value={measurements.measurements.hips}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="crotch" className="block text-purple-700 text-sm font-bold mb-2">
              Crotch
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="crotch"
              name="crotch"
              value={measurements.measurements.crotch}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="tigh" className="block text-purple-700 text-sm font-bold mb-2">
              Tigh
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="tigh"
              name="tigh"
              value={measurements.measurements.tigh}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="calf" className="block text-purple-700 text-sm font-bold mb-2">
              Calf
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="calf"
              name="calf"
              value={measurements.measurements.calf}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="pantlength" className="block text-purple-700 text-sm font-bold mb-2">
              Pant length
            </label>
            <input
              type="number"
              placeholder="size in inches"
              id="pantlength"
              name="pantlength"
              value={measurements.measurements.pantlength}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-auto">
            <label htmlFor="unisexsize" className="block text-purple-700 text-sm font-bold mb-2">
              Unisex Size
            </label>
            <select
              type="number"
              placeholder="size in inches"
              id="unisexsize"
              name="unisexsize"
              value={measurements.measurements.unisexsize}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="xs">XS </option>
              <option value="s">S </option>
              <option value="m">M </option>
              <option value="l">L </option>
              <option value="xl">XL </option>
              <option value="xxl">XXL </option>

            </select>
          </div>
          <div className="col-span-2 m-2 mb-4">
            <label htmlFor="nopairs" className="block text-purple-700 text-sm font-bold mb-2">
              No. of pairs
            </label>
            <input
              type="number"
              placeholder="number of pair "
              id="nopairs"
              name="nopairs"
              value={measurements.measurements.nopairs}
              onChange={handleSubmit}
              className="shadow appearance-none border rounded w-full focus:bg-purple-50 py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <br />

          <br />

          <button className="bg-purple-500 w-auto h-auto  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-purple-500/50 focus:shadow-outline transition ease-in-out delay-50  hover:-translate-y-0.5 hover:scale-110 duration-100"
            type="submit">Estimate Price</button>
        </div>
      </form>
    </>
  );
}
export default TailorPriceEstimator;
