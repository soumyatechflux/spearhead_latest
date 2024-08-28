import React, { useEffect, useState } from "react";
import axios from "axios";

type Country = {
  name: string;
  timeZone: string;
  time?: string; // Optional until fetched
};

const countries: Country[] = [
  { name: "Dubai", timeZone: "Asia/Dubai" },
  { name: "London", timeZone: "Europe/London" },
  { name: "New York", timeZone: "America/New_York" },
  { name: "Jamaica", timeZone: "America/Jamaica" },
  { name: "Indonesia", timeZone: "Asia/Jakarta" },
  { name: "Singapore", timeZone: "Asia/Singapore" },
  { name: "Bangkok", timeZone: "Asia/Bangkok" },
  { name: "Hong Kong", timeZone: "Asia/Hong_Kong" },
];

const CountriesTime = () => {
  const [times, setTimes] = useState<Country[]>([]); // Explicitly type state

  useEffect(() => {
    const fetchTime = async () => {
      const timeData: Country[] = await Promise.all(
        countries.map(async (country) => {
          const response = await axios.get(
            `https://timeapi.io/api/Time/current/zone?timeZone=${encodeURIComponent(country.timeZone)}`
          );
          return { ...country, time: response.data.dateTime };
        })
      );
      setTimes(timeData);
    };

    fetchTime();
  }, []);

  return (
    <div className="container-fluid contries-main-container">
      <div className="row my-div">
        {times.length > 0 ? (
          times.map((country, index) => (
            <div key={index} className="animate__animated animate__fadeIn p-0">
              <div className="country-time-alignment">
                <div style={{textAlign:'start',width:'85px'}}>
                  <h4 className="font-weight-bold country-name">{country.name}</h4>
                </div>
                <div className="ms-3" style={{textAlign:'start'}}>
                  <p className="h5 country-time text-white">
                    {new Date(country.time!).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center p-4">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountriesTime;
