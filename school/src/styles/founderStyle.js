import styled from "styled-components";

export const StyledFounder = styled.section`
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  /* border: 1px solid red; */
  color: red;
  & > .founder-text {
    width: 50%;
    line-height: 20px;
    margin-bottom: 1rem;
    & > .founder-better {
      font-family: "Poppins";
      font-size: 19px;
      font-weight: 500;
      color: rgba(61, 166, 192, 1);
    }
    & > .founder-online {
      font-family: "Poppins";
      font-size: 36px;
      font-weight: 400;
      line-height: 35px;
      color: rgba(2, 43, 105, 1);
    }
  }
`;
