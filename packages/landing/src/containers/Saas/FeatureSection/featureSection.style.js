import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 80px 0 180px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }

  .row {
    > .col {
      &:nth-child(-n + 3) {
      }

      &:nth-child(3n + 3),
      &:last-child 
          }
        }
`;

export default FeatureSectionWrapper;
