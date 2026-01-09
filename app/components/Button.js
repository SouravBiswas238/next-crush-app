"use client";

export default function Button() {
  return (
    <button
      className="bg-green-500 px-4 py-1 mt-4 cursor-pointer text-white rounded"
      onClick={() => {
        console.log("Button in Mission page clicked");
      }}
    >
      Click here
    </button>
  );
}
