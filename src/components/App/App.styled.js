import styled from '@emotion/styled';
import images from 'images/devicetemplates_tablet-02.png';
export const Container = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px 20px;
  width: 500px;
  height: 700px;
  text-align: center;
  justify-content: center;
  border-radius: 20px;
background-color: rgba(255, 255, 128, .5);
      background-image: url("${images}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% ;

`;

export const Title = styled.h1`
  display: block;
  margin: 0 0 20px;
  color: #ffff;
  font-size: 32px;
`;

export const ContactsTitle = styled.h2`
  display: block;
  padding-top: 30px;
  margin: 0 0 20px;
  color: #333340;
  font-size: 24px;
`;

export const FilterTitle = styled.p`
  display: block;
  margin: 0 0 20px;
  color: #333340;
  font-size: 18px;
`;
