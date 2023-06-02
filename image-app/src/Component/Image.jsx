import React from "react";

export const Image = () => {
  const image_array = [
    {
      title: "Image 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image_url: "https://example.com/image1.jpg",
    },
    {
      title: "Image 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image_url: "https://example.com/image2.jpg",
    },
    {
      title: "Image 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image_url: "https://example.com/image3.jpg",
    },
    {
      title: "Image 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image_url: "https://example.com/image4.jpg",
    },
    {
      title: "Image 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image_url: "https://example.com/image5.jpg",
    },
    {
      title: "Image 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image_url: "https://example.com/image6.jpg",
    },
  ];

  return (
    <div>
      {image_array.map((el) => (
        <div>
          <h4>{el.description}</h4>
          <img src={el.image_url} alt="" />
        </div>
      ))}
    </div>
  );
};
