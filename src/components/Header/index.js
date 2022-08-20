import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";

const navItem = ["Home", "Category", "Info", "Contact"];

const Header = () => {
  return (
    <Wrapper>
      <img src={avatar} alt="avatar" />
      <ul>
        {navItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  margin: 10px 30px;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
  ul {
    display: inline-block;
  }
  li {
    display: inline-block;
    text-transform: uppercase;
    padding: 8px;
    font-size: 1.3rem;
    margin-left: 12px;
  }
`;
