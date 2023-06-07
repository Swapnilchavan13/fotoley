import React, { useState, useEffect } from "react";
import "./styles.css";

export const Image = () => {


  const image_array = [
    {
      title: "War And Love",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/115/600/48/peace-versus-war-wallpaper-preview.jpg",
    },
    {
      title: "Beloved",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid qui dolorem eum fugiat quo voluptas nulla",
      image_url:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/178E5/production/_115758469_055840857.jpg",
    },
    {
      title: "Think",
      description:
        "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      image_url:
        "https://static.boredpanda.com/blog/wp-content/uploads/2015/12/tanks-taken-over-by-nature__880.jpg",
    },
    {
      title: "Select Data",
      description:
        "Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
      image_url:
        "https://c4.wallpaperflare.com/wallpaper/311/75/587/god-of-war-2018-god-of-war-wallpaper-preview.jpg",
    },
    {
      title: "Never End",
      description:
        "Drspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
      image_url:

      "https://moewalls.com/wp-content/uploads/2022/10/the-mountain-god-of-war-thumb.jpg",
    },
  ];

  const [currentImage, setCurrentImage] = useState(image_array[0].image_url);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);

  const changeImage = (index) => {
    setCurrentImage(image_array[index].image_url);
    setCurrentIndex(index);
  };

  const goToPreviousImage = () => {
    const newIndex =
      currentIndex === 0 ? image_array.length - 1 : currentIndex - 1;
    changeImage(newIndex);
  };

  const goToNextImage = () => {
    const newIndex =
      currentIndex === image_array.length - 1 ? 0 : currentIndex + 1;
    changeImage(newIndex);
  };

  useEffect(() => {
    let slideshowTimer;

    if (isSlideshowPlaying) {
      slideshowTimer = setInterval(goToNextImage, 3000);
    }

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [currentIndex, isSlideshowPlaying]);

  const handlePlayPauseSlideshow = () => {
    setIsSlideshowPlaying((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="main-image">
        <img src={currentImage} alt="" />
        <div>
          <h1>
            {image_array.find((el) => el.image_url === currentImage)?.title}
          </h1>
          <p>
            {
              image_array.find((el) => el.image_url === currentImage)
                ?.description
            }
          </p>
        </div>
      </div>
      <div className="small-images">
        <button className="arrow-button" onClick={goToPreviousImage}>
          ◀
        </button>
        {image_array.map((el, index) => (
          <img
            key={el.image_url}
            className={currentImage === el.image_url ? "active" : ""}
            src={el.image_url}
            alt=""
            onClick={() => changeImage(index)}
          />
        ))}
        <button className="arrow-button" onClick={goToNextImage}>
          ▶
        </button>
        <div className="playbutton">
          <button onClick={handlePlayPauseSlideshow}>
            {isSlideshowPlaying ? "||" : "►"}
          </button>
        </div>
      </div>
    </div>
  );
};
