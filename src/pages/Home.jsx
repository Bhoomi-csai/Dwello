import React, { useState, useEffect } from "react";
import "./Home.css";
import { MapPin } from 'lucide-react';

const Home = () => {
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  const [cityZip, setCityZip] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      const url =
        "https://raw.githubusercontent.com/Bhoomi-csai/public-datasets/main/properties.json";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setAllListings(result);
        setFilteredListings(result); // Default: show all
        console.log("Fetched properties:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = () => {
    const filtered = allListings.filter((listing) => {
      const matchesCity = listing.location
        .toLowerCase()
        .includes(cityZip.toLowerCase());
      const matchesType =
        !propertyType ||
        listing.propertyType.toLowerCase() === propertyType.toLowerCase();
      const matchesMin = !minPrice || listing.price >= parseInt(minPrice);
      const matchesMax = !maxPrice || listing.price <= parseInt(maxPrice);
      return matchesCity && matchesType && matchesMin && matchesMax;
    });

    setFilteredListings(filtered);
  };

  return (
    <div className="homepage-wrapper">
      <section className="hero-banner">
        <h1>Discover Homes You'll Love</h1>
        <p>Your ideal property is just a click away with Dwello.</p>
      </section>

      <section className="search-box">
        <h2>Smart Search</h2>
        <div className="search-controls">
          <input
            type="text"
            placeholder="City or ZIP"
            value={cityZip}
            onChange={(e) => setCityZip(e.target.value)}
          />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
          <input
            type="number"
            placeholder="Min Price ($)"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price ($)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className="go-search" onClick={handleSearch}>
            Go
          </button>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Top Picks For You</h2>
        <div className="listing-grid">
          {filteredListings.map((listing) => (
            <div className="listing-card" key={listing.id}>
              <img src={listing.imageUrl} alt={listing.location} />
              <h3>{listing.location}</h3>
              <p>${listing.price.toLocaleString()}</p>
              <div className="location">
                <p>{listing.bedrooms} Bed • {listing.bathrooms} Bath</p>
                <p location= {listing.location}><MapPin /></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
