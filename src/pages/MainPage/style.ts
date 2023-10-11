import styled from 'styled-components';

export const StyledMainPage = styled.div`
  .title {
    padding: 1rem 0;
    border-top: 0.1rem solid #ddd;
    border-bottom: 0.1rem solid #ddd;
    font-weight: 600;
    text-align: left;
  }
  table {
    width: 100%;
    td:nth-child(1) {
      width: 55%;
    }
  }
  .park {
    &-list {
      padding: 1.5rem 0;
      border-bottom: 0.1rem solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-name {
      font-weight: 600;
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      color: #00325a;
    }
    &-map-btn {
      background: linear-gradient(36deg, #1576c6, #23b5b0);
      border: 0;
      width: 35px;
      height: 35px;
      display: flex;
      font-size: 1.3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 70%;
      }
    }
  }
  .map-marker {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scroll {
    overflow-y: scroll;
    height: fit-content;
    height: calc(100vh - 443px);
  }
  .scroll::-webkit-scrollbar {
    width: 0;
  }
`;
