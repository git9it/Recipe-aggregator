import React from 'react';

function UploadFormInput({ inputObj, name }) {
  return (
    <>
      <div className="flex justify-between">
        <label className="mt-2 text-lg">{name}</label>
        <input
          value={inputObj.value}
          onChange={(e) => inputObj.onChange(e)}
          onBlur={(e) => inputObj.onBlur(e)}
          className="border-[#ddd] border-solid rounded-md border-[1px] outline-none block w-full m-2 p-1 pl-3 "
          type="text"
          name={name}
        />
        {console.log(name, inputObj.minLength)}
        {inputObj.isDirty && inputObj.isEmpty && (
          <div className="mt-2 text-xs text-red-600">Cannot be empty!</div>
        )}
        {inputObj.isDirty && inputObj.minLength && (
          <div className="mt-2 text-xs text-red-600">Too short!</div>
        )}
        {inputObj.isDirty && inputObj.urlError && (
          <div className="mt-2 text-xs text-red-600">This isn't url!</div>
        )}
        {inputObj.isDirty && inputObj.ingridientsError && (
          <div className="mt-2 text-xs text-red-600">Wrong format!</div>
        )}
      </div>
    </>
  );
}

export default UploadFormInput;
