type Props = {
  containerStyle: string;
  imageStyle: string;
  image: string;
};

const HeaderImageContainer = ({ containerStyle, imageStyle, image }: Props) => {
  return (
    <div className={containerStyle}>
      <img src={process.env.PUBLIC_URL + image} alt="" className={imageStyle} />
    </div>
  );
};

export default HeaderImageContainer;
