import React, { useState } from 'react';
import './Services.css';

const servicesList = [
  {
    id: 1,
    title: 'Verified Property Listings',
    image: 'https://www.tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg',
    shortDescription: 'Explore verified rental homes with trust and transparency.',
    details: 'Each property is verified by our in-house agents. You get real photos, legal clearance, and full owner details.',
  },
  {
    id: 2,
    title: 'Virtual Property Tours',
    image: 'https://www.forbes.com/advisor/wp-content/uploads/2022/08/Image_-_Virtual_Tour_.jpeg.jpg',
    shortDescription: 'View properties online with 360° virtual tours.',
    details: 'Take a full virtual walk-through of rental properties from the comfort of your home. Schedule live video calls with agents too.',
  },
  {
    id: 3,
    title: 'Rental Agreement Assistance',
    image: 'https://www.guptadocumentcentre.com/blog/wp-content/uploads/2023/09/Rent-Agreement-Services-2.jpg',
    shortDescription: 'We handle all legal paperwork for your rental.',
    details: 'Digitally sign rental agreements, get legal guidance, and ensure smooth move-ins with our legal assistance team.',
  },
  {
    id: 4,
    title: 'Packers and Movers',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDGBLSbnCXZZnWD3LpTVFt_vsmR2QuSdj6g&s',
    shortDescription: 'Book trusted relocation services instantly.',
    details: 'Partnered with reliable movers to make your shift easy. Transparent pricing and damage insurance included.',
  },
];

function Services() {

  return (
    <div className="services-page">
        <div className="hero">
            <div className="hero-dark-overlay"></div>
            <div className="hero-overlay">
                <h1>Services Designed for Your Success</h1>
            </div>
        </div>

      <section className="carousel-section">
        <h2>What We Offer</h2>
        <div className="carousel">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="carousel-card"
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <details>
            <summary>How do I book a property?</summary>
            <p>You can book a property online by contacting the owner or agent through the listing page.</p>
          </details>
          <details>
            <summary>Is there a money-back guarantee?</summary>
            <p>Yes, for Dwello Assured listings, you receive a full refund if the property isn't as described.</p>
          </details>
          <details>
            <summary>Do I need to pay extra for rental agreements?</summary>
            <p>No, basic agreement services are included in your rental package. Premium legal services may cost extra.</p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Services;