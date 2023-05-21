/* eslint-disable react/prop-types */
const GalleryCard = ({ gallery }) => {
  const { name, image, price, subcategory } = gallery;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl min-h-[320px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <h3>Category: {subcategory}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
