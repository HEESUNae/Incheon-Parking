import styled from 'styled-components';

export const StyledMainPage = styled.div`
  .title {
    padding: 1rem;
    border-top: 0.1rem solid #ddd;
    border-bottom: 0.1rem solid #ddd;
    font-weight: 600;
    text-align: left;
    height: 40px;
    box-sizing: border-box;
  }
  table {
    width: 100%;
    td:nth-child(1) {
      width: 55%;
    }
  }
  .park {
    &-list {
      padding: 1.5rem 1rem;
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
    height: calc(100vh - 75px + 40px);
  }
  .scroll::-webkit-scrollbar {
    width: 0;
  }

  .info-container {
    display: flex;
    flex-direction: row-reverse;
    height: calc(100vh - 75px);
    overflow: hidden;
  }
  .list-container {
    width: 28%;
    min-width: 34rem;
  }

  @media (max-width: 765px) {
    .info-container {
      display: block;
    }
    .list-container {
      width: 100%;
      min-width: 100%;
    }
    .scroll {
      height: calc(100vh - 415px);
    }
  }
`;
