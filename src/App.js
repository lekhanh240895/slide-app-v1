import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Content from "./components/Content";
import ImageList from "./components/ImageList";
import { useEffect, useState, useTransition } from "react";
import images from "./assets/images";

const imageList = [
  {
    id: 1,
    name: "Item 0",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 1",
    src: images.img1,
  },
  {
    id: 2,
    name: "Item 1",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 2",
    src: images.img2,
  },
  {
    id: 3,
    name: "Item 2",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 3",
    src: images.img3,
  },
  {
    id: 4,
    name: "Item 3",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 4",
    src: images.img4,
  },
  {
    id: 5,
    name: "Item 4",
    desc: "Tính rủ anh đi cháy phố, chưa kịp đón a mà xe đã cháy 5",
    src: images.img5,
  }
];

const list_color = ["#40BCBB", "#B58CD4", "#BADEC0", "#9BD5E9", "#BADEC0"];

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [backgroundColor, setBackGroundColor] = useState(null);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setBackGroundColor(list_color[currentIndex]);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      startTransition(() => {
        setCurrentIndex(currentIndex - 1);
      });
    } else {
      startTransition(() => {
        setCurrentIndex(imageList.length - 1);
      });
    }
  };
  const handleNext = () => {
    if (currentIndex < imageList.length - 1) {
      startTransition(() => {
        setCurrentIndex(currentIndex + 1);
      });
    } else {
      startTransition(() => {
        setCurrentIndex(0);
      });
    }
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Container>
        <Header />

        <Content listItem={imageList} currentIndex={currentIndex} />
        <ImageList imageList={imageList} currentIndex={currentIndex} />

        <Background backgroundColor={backgroundColor} />
        <Controls>
          <button onClick={handlePrevious}>
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </button>

          <button onClick={handleNext}>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </Controls>

        <div className="dot">
          {Array.from({ length: imageList.length }).map((item, index) => (
            <DotItem key={index} isActive={currentIndex === index}></DotItem>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: #fff;
  width: 1000px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;

  .dot {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const DotItem = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isActive ? "#f5be32" : "#555")};
  margin: 0px 8px;
  display: inline-block;
  border-radius: 50%;
`;

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  border-radius: 30% 70% 25% 75% / 49% 35% 65% 51%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#af0ea1"};
  transition: 1s;
  transform: rotate(0deg) translate(-50%, -50%);
  z-index: -1;
  filter: blur(80px);
  opacity: 0.6;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  button {
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
    padding: 8px;

    i {
      font-size: 1.6rem;
    }
  }
  button + button {
    margin-left: 10px;
  }
`;
