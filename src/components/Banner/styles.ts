import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60rem;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

export const Content = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.3s ease-in-out;
`;

export const DescriptionWrapper = styled.div`
  position: absolute;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background: linear-gradient(to right, #090909 80%, #1f1f1e00);

  @media screen and (max-width: 500px) {
    background: linear-gradient(to top, #090909 60%, #1f1f1e00);
    bottom: 0;
    width: 100%;
    min-height: 50%;
    align-items: center;
  }

  @media screen and (min-width: 501px) {
    top: 0;
    padding-left: 6rem;
    width: 50%;
    height: 100%;
  }
`;

export const LogoTitleWrapper = styled.div`
  /* max-width: 32rem; */

  @media screen and (max-width: 500px) {
    .logo-img {
      max-height: 15rem !important;
    }
  }
`;

export const TitleText = styled.h1`
  font-size: 4.6rem;
  font-weight: 400;
  color: var(--white);
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--gray);

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Span = styled.span`
  font-size: 1.8rem;
  color: var(--gray);
  font-weight: 400;

  display: flex;
  align-items: center;
`;

export const Certification = styled.div`
  border: 0.2rem solid var(--gray);
  border-radius: 0.2rem;
  padding: 0.3rem 0.6rem 0.3rem 0.5rem;
  display: inline-block;
  margin-left: 0.5rem;
`;

export const Overview = styled.p`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;
  line-height: 1.6;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 1rem;

    .trailer-btn {
      width: 60vw;
      background: var(--white);
      color: var(--black);
      justify-content: center;
    }
  }
`;

export const Redirect = styled(Link)`
  text-decoration: none;
  padding: 1.5rem 2rem;
  font-size: 2.2rem;
  background-color: var(--body);
  color: var(--white);
  font-weight: 500;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--body);
  &:hover {
    background-color: #1f1f1e60;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 1.5rem 2rem;
  font-size: 2.2rem;
  background-color: #1f1f1e60;
  border: 0.2rem solid var(--body);
  color: var(--white);
  font-weight: 500;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--body);
  }

  &.watchlist {
    padding: 1.5rem;
    border-radius: 50%;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const BackdropWapper = styled.div`
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type SideType = {
  side?: string;
  position?: boolean;
};

export const ArrowPagination = styled.div`
  position: absolute;
  color: var(--white);
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0;
  cursor: pointer;

  z-index: 3;
  ${({ side }: SideType) =>
    side == "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}

  &:hover {
    background-color: #1f1f1e20;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// pagination

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  z-index: 6;
`;

export const Pagination = styled.button`
  border: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--gray);

  ${({ position }: SideType) =>
    position &&
    css`
      background-color: var(--white);
    `}
`;
