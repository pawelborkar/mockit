/*
component: ApiForm
@Author: Pawel Borkar
Date: 21 January 2023
*/

import Button from '../Button/Button';

const ApiForm = () => {
  return (
    <div class="h-full form-control ">
      <h2 class="text-slate-900 text-xl font-semibold"> URL Endpoint</h2>
      <div class="  flex flex-col justify-between">
        <div class="min-h-min mb-8 flex justify-between text-slate-600 font-semibold ">
          <div class="flex-1 justify-center pr-3 ">
            <label className="label">
              <div>Request Type</div>
            </label>
            <select className=" text-slate-200 select w-full max-w-xs">
              <option class="pb-2" disabled selected>
                Select Request Type
              </option>
              <option class="p-2">GET</option>
              <option class="p-2">POST</option>
              <option class="p-2">PUT</option>
              <option class="p-2">DELETE</option>
              <option class="p-2">PATCH</option>
            </select>
          </div>
          <div class="flex-1 justify-center">
            <label className="label">
              <div>Endpoint</div>
            </label>
            <input
              type="text"
              placeholder="Enter the URL and endpoint"
              className="text-slate-200  input w-full max-w-xs"
            />
          </div>
        </div>
        <div class=" h-full min-w-full border-solid">
          <label class="label">
            <h4 class="text-slate-600 font-semibold">
              Paste Expected Response
            </h4>
          </label>
          <textarea
            class="h-96 w-full max-w-xs text-slate-200 textarea"
            placeholder="Paste the response you want to get"
          ></textarea>
          <div class="my-3">
            <Button type="btn-success" label="Create Endpoint" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiForm;
