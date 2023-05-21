import GalleryCard from "./GalleryCard";
import { useEffect, useState } from "react";

function Gallery() {
  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-kappa.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data);
      });
  }, []);

  return (
    <div className="container mx-auto py-24">
      <div>
        <h2 className="text-4xl text-center pb-16">Toy Gellery</h2>
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
