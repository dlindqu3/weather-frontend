import React from "react";

function Footer() {
  return (
    <footer className="text-slate-100 bg-black border-t-2 border-orange-300 text-lg px-2 py-2 h-25 flex justify-center">
      <div>
        <h2 className="flex justify-center">Connect</h2>
        <div className="flex justify-center">
          <button className="hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 flex justify-center"><a href="https://github.com/dlindqu3/">GitHub</a></button>
        </div>
        <div className="flex justify-center">
          <button className="hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-2 flex justify-center"><a href="https://www.linkedin.com/in/dwight-lindquist/">LinkedIn</a></button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
