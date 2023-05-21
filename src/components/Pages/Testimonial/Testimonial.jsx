import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/4fnHnw2/newbg.png')] bg-cover min-h-[700px]">
      <div className="container mx-auto">
        <div>
          <h1 className="text-center text-3xl pt-24">Customer Review</h1>
        </div>
        <div>
          <div className="carousel w-full">
            {/* 1 */}
            <div id="slide1" className="carousel-item relative w-full">
              <div className="w-6/12 mx-auto mt-5">
                <div className="avatar flex justify-center mt-20">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/women/6.jpg"
                      className="block "
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <h2 className="text-2xl">Sarah Tailer</h2>
                  <p className="mt-3">
                    I bought this action figure for my son, and he absolutely
                    loves it! The quality is fantastic, and it has so many cool
                    features. It is durable and provides hours of fun. Highly
                    recommend!
                  </p>
                  <p className="flex justify-center mt-3">
                    <Rating style={{ maxWidth: 100 }} value="4.5" readOnly />
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* 2 */}
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-6/12 mx-auto mt-5">
                <div className="avatar flex justify-center mt-20">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/men/22.jpg"
                      className="block "
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <h2 className="text-2xl">Frank Williams</h2>
                  <p className="mt-3">
                    I bought this action figure for my son, and he absolutely
                    loves it! The quality is fantastic, and it has so many cool
                    features. It is durable and provides hours of fun. Highly
                    recommend!
                  </p>
                  <p className="flex justify-center mt-3">
                    <Rating style={{ maxWidth: 100 }} value="5" readOnly />
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* 3 */}
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-6/12 mx-auto mt-5">
                <div className="avatar flex justify-center mt-20">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/women/30.jpg"
                      className="block "
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <h2 className="text-2xl">Jessica Jennifer</h2>
                  <p className="mt-3">
                    I bought this action figure for my son, and he absolutely
                    loves it! The quality is fantastic, and it has so many cool
                    features. It is durable and provides hours of fun. Highly
                    recommend!
                  </p>
                  <p className="flex justify-center mt-3">
                    <Rating style={{ maxWidth: 100 }} value="4" readOnly />
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* 4 */}
            <div id="slide4" className="carousel-item relative w-full">
              <div className="w-6/12 mx-auto mt-5">
                <div className="avatar flex justify-center mt-20">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/men/10.jpg"
                      className="block "
                    />
                  </div>
                </div>
                <div className="text-center mt-5">
                  <h2 className="text-2xl">Cesar Liano</h2>
                  <p className="mt-3">
                    I bought this action figure for my son, and he absolutely
                    loves it! The quality is fantastic, and it has so many cool
                    features. It is durable and provides hours of fun. Highly
                    recommend!
                  </p>
                  <p className="flex justify-center mt-3">
                    <Rating style={{ maxWidth: 100 }} value="4.5" readOnly />
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
