const Banner = ({ text, image }) => {
  return (
    <section className="banner">
      <div>
        <img src={image} alt="img banner" />
        <div className="overlay"></div>
      </div>
      {text && <p>{text}</p>}
    </section>
  );
};

export default Banner;
