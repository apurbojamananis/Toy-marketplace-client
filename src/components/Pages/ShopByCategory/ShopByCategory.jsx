import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysCard from "./ToysCard";

const ShopByCategory = () => {
  const [tabName, setTabName] = useState("Math Toys");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetchData(tabName);
  }, [tabName]); // Empty dependency array ensures this effect only runs once on component mount

  const fetchData = (category) => {
    fetch(
      `https://b7a11-toy-marketplace-server-kappa.vercel.app/shopByCategory/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleTabs = (category) => {
    setTabName(category);
    fetchData(category);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="py-24">
          <div>
            <h2 className="text-4xl text-center mb-10">Shop By Category</h2>
          </div>
          <hr />
          <div className="mt-5">
            <Tabs>
              <TabList>
                <Tab
                  onClick={() => {
                    handleTabs("Math Toys");
                  }}
                >
                  Math Toys
                </Tab>
                <Tab
                  onClick={() => {
                    handleTabs("Language Toys");
                  }}
                >
                  Language Toys
                </Tab>
                <Tab
                  onClick={() => {
                    handleTabs("Science Toys");
                  }}
                >
                  Science Toys
                </Tab>
                <Tab
                  onClick={() => {
                    handleTabs("Engineering Toys");
                  }}
                >
                  Engineering Toys
                </Tab>
              </TabList>

              <TabPanel>
                <div className="grid md:grid-cols-4 gap-3 px-5 md:px-0">
                  {toys.map((toy) => (
                    <ToysCard key={toy._id} toy={toy}></ToysCard>
                  ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid md:grid-cols-4 gap-3 px-5 md:px-0">
                  {toys.map((toy) => (
                    <ToysCard key={toy._id} toy={toy}></ToysCard>
                  ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid md:grid-cols-4 gap-3 px-5 md:px-0">
                  {toys.map((toy) => (
                    <ToysCard key={toy._id} toy={toy}></ToysCard>
                  ))}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="grid md:grid-cols-4 gap-3 px-5 md:px-0">
                  {toys.map((toy) => (
                    <ToysCard key={toy._id} toy={toy}></ToysCard>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
