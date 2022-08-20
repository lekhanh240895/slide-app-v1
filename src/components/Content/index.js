import styled from "styled-components";

const Content = ({ listItem, currentIndex }) => {
  return (
    <>
      {listItem.map((item, index) => (
        <Wrapper isActive={currentIndex === index} key={index}>
          <h1>{item.name}</h1>
          <p>{item.desc}</p>
          <button>
            Truy cập
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </Wrapper>
      ))}
    </>
  );
};

export default Content;

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  max-width: 240px;
  overflow: hidden;
  animation: item_content 1s linear 1 forwards;
  display: ${(props) => (props.isActive ? "block" : "none")};

  @keyframes item_content {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 200px;
    }
  }

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.3rem;
    margin: 16px 0;
  }

  button {
    border: none;
    outline: none;
    padding: 4px 20px;
    font-size: 1rem;
    background-color: #a52929;
    color: #efefef;
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;

    i {
      margin-left: 8px;
      font-size: 1.4rem;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -20px;
      z-index: -1;
      border-radius: 999px;
      background-color: #565656;
      width: 100%;
      height: 100%;
    }
  }
`;
