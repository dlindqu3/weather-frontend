import React from "react";
import chef from "../statics/chefProfile.jpg";
import photographer from "../statics/photographerProfile.jpg";
import biker from "../statics/bikerProfile.jpg";

function Home() {
  return (
    <div>
      <div className="">
        <div className="flex justify-center">
          <h3>Welcome!</h3>
        </div>
        <p>
          This site allows you to conveniently and quickly see the upcoming
          weather for a given location. Once you have created an account, you
          can query for weather data by designating a given city name. The
          server might take 20-30 seconds to start up after 15 or so minutes of
          inactivity, so don't be alarmed if there's some initial lag. Thank you
          for visiting the site.
        </p>

        <div className="flex justify-center my-7">
          <div className="mx-3 border-solid border-2 border-slate-100 rounded max-w-sm">
            <div className="py-2 px-2">
              <div className="flex justify-center">
                <img src={chef} width="220" height="250" alt="chef"/>
              </div>
              <div className="flex justify-center">
                <p>
                  "Knowing the weather ahead of time helps me prepare for my
                  business each day." - Lily C.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-3 border-solid border-2 border-slate-100 rounded max-w-sm">
          <div className="py-2 px-2">
            <div className="flex justify-center">
              <img src={photographer} width="220" height="250" alt="photographer"/>
            </div>
            <div className="flex justify-center">
              <p>
                "I'm outside all the time on my job, and it's great to know
                ahead of time what conditions I'll be working in." - Ben A.
              </p>
            </div>
            </div>
          </div>

          <div className="mx-3 border-solid border-2 border-slate-100 rounded max-w-sm">
          <div className="py-2 px-2">
            <div className="flex justify-center">
              <img src={biker} width="220" height="250" alt="biker"/>
            </div>
            <div>
              <p>
                "I try to bike at least an hour a day, and Celera helps me
                avoid hazardous weather." - Jerry T.
              </p>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
