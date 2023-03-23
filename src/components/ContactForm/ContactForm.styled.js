import styled from '@emotion/styled';
// import { Field } from 'formik';

export const Label = styled.label`
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin: 0;
  outline: none;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #333340;
  border-radius: 5px;
 `;

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid #ff6b08;
  transition: box-shadow 400ms ease-in, color 400ms ease-in,
  background-color 400ms ease-in;
  color: #ff6b08;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 0 0 1px #000000;

  &:hover {
    color: #ffffff;
    background-color: #ff6b08;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
