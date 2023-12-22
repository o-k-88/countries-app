import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Card";
import { ALL_COUNTRIES } from "../config";

const Homepage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Controls />
      <List>
        {countries.map((item, index) => {
          const countryInfo = {
            img: item.flags.png,
            name: item.name.common,
            info: [
              {
                title: "Population",
                description: item.population.toLocaleString(),
              },
              {
                title: "Region",
                description: item.region,
              },
              {
                title: "Capital",
                description: item.capital,
              },
            ],
          };
          return <Card key={index} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default Homepage;
