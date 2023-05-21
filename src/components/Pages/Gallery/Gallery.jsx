import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";

function Gallery() {
  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGalleries(data);
      });
  }, []);

  console.log(galleries);
  return (
    <div className="container mx-auto py-24">
      <div>
        <h2 className="text-5xl text-center pb-16">Toy Gellery</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {galleries.map((gallery) => (
          <GalleryCard key={gallery._id} gallery={gallery}></GalleryCard>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
