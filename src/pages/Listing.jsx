import React, { useEffect, useState } from "react";
import "./Listing.css";
import { Bed, Bath, MapPin } from "lucide-react";

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const url =
        "https://raw.githubusercontent.com/Bhoomi-csai/public-datasets/main/explore.json";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setProperties(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="listing-page">
        <p>Loading listings...</p>
      </div>
    );
  }

  return (
    <div className="listing-page">
      <h2>Explore Homes on Dwello</h2>
      <div className="listing-grid">
        {properties.map((property) => (
          <a
            key={property.id}
            className="listing-card"
            href={
              property.mapsUrl ||
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                property.location
              )}`
            }
            target="_blank"
          >
            <img
              src={
                property.imageUrl ||
                "https://media.istockphoto.com/id/909423306/photo/modern-multilevel-house-exterior-with-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=sP_kd0PhGsGvGjgAhu9aTu9U4-PgZ64EEFZVZMjuoYQ="
              }
              alt={property.title || property.location || "Property"}
            />
            <div className="info">
              <div className="top-row">
                <h3>{property.title || "Beautiful Stay"}</h3>
                <p className="price">
                  ${property.price?.toLocaleString() || "N/A"}
                </p>
              </div>
              <div className="location-link">
                <MapPin size={14} />
                <span>{property.location || "Unknown Location"}</span>
              </div>
              <div className="details">
                <span>
                  <Bed size={14} /> {property.bedrooms ?? "N/A"} Beds
                </span>
                <span>
                  <Bath size={14} /> {property.bathrooms ?? "N/A"} Baths
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Listing;
