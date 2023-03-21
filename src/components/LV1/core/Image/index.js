import styled, { css } from "styled-components";
import { Calander, Clock, CoinIcon, Computer, Correct, Exit, Facebook, Filter, Instagram, Lens, LinkedIn, Logo, Menu, Saved, Twitter, User, VideoIcon, Watch, ZoomIcon } from "./Icons";

const ImageWrap = (props) => {
  const obj = props?.sx;
  const entries = obj && Object.entries(obj);

  return (
    <Wrap {...props} entries={entries}>
      <div>
        {!props.bgimg ? (
          <img src={props.src} alt={props.name || props.src} />
        ) : (
          <BGImg src={props.src} width={props.width} height={props.height} />
        )}
      </div>
    </Wrap>
  );
};

const ImageComponent = (props) => {
  switch (props.imageType) {
    case "image":
      return <ImageWrap {...props} />;

    case "filter":
      return <Filter {...props} />;

    case "user":
      return <User {...props} />;

    case "menu":
      return <Menu {...props} />;

    case "saved":
      return <Saved {...props} />;

    case "watch":
      return <Watch {...props} />;

    case "calander":
      return <Calander {...props} />;

    case "clock":
      return <Clock {...props} />;

    case "correct":
      return <Correct {...props} />;

    case "exit":
      return <Exit {...props} />;

    case "logo":
      return <Logo {...props} />;

    case "facebook":
      return <Facebook {...props} />;

    case "instagram":
      return <Instagram {...props} />;

    case "linkedin":
      return <LinkedIn {...props} />;

    case "twitter":
      return <Twitter {...props} />;

    case "computer":
      return <Computer {...props} />;

    case "video":
      return <VideoIcon {...props} />;

    case "zoom":
      return <ZoomIcon {...props} />;

    case "coin":
      return <CoinIcon {...props} />;

    default:
      return null;
  }
};

export default ImageComponent;

const Wrap = styled.div`
  width: ${(props) => (props.width ? props.width : "50")}px;
  height: ${(props) => (props.height ? props.height : "50")}px;
  ${(props) =>
    props?.entries &&
    props.entries.map(
      ([key, val]) => css`
        ${key}: ${val};
      `
    )}
  img,
  svg {
    width: ${(props) => (props.width ? props.width : "36")}px;
    height: ${(props) => (props.width ? props.height : "36")}px;
    color: ${(props) => (props.color ? props.color : "black")};
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
        height: 100%;
      `}
  }
`;

const BGImg = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: url(${(props) => props.src}) no-repeat center / cover;
`;
