import React from "react";

const Loading = () => {
  return (
    <div className="flex h-[160px] items-center justify-center">
      <div className="w-8 h-8 border-4 border-slate-400 rounded-full border-t-slate-200 animate-spin"></div>
    </div>
  );
};

export default Loading;
