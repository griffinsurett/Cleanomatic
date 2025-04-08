import React from "react";

const GoogleMap = ({
  address = "20 Carter Dr, Marlboro Township, NJ 07746",
  className = "w-screen h-screen",
}) => {
  // Hardcoded map embed URL for your business address.
  // If you want to support dynamic addresses in the future,
  // consider building a helper function that converts an address to a Google Maps embed URL.
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.100363656816!2d-74.31778958454493!3d40.27698787939443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3136b1bb01a39%3A0xaaf2e8cd32c20aa1!2s20%20Carter%20Dr%2C%20Marlboro%20Township%2C%20NJ%2007746!5e0!3m2!1sen!2sus!4v1587372219272!5m2!1sen!2sus";

  return (
    <iframe
      src={mapEmbedUrl}
      className={className}
      loading="lazy"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );
};

export default GoogleMap;
