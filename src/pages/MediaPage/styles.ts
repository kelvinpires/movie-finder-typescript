import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div``;

export const Details = styled.section`
  padding: 0 5rem 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media screen and (max-width: 500px) {
    padding: 0 2rem 2rem;
  }
`;

export const PosterWrapper = styled.div`
  @media screen and (max-width: 679px) {
    display: none;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 680px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  color: var(--white);
`;

export const Subtitle = styled.span`
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--white);
  margin-top: 3rem;
`;

export const Overview = styled.p`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 400;
  line-height: 1.6;
`;

export const InfoUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  list-style: none;
  gap: 2rem;
`;

export const InfoLi = styled.li`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.span`
  color: var(--white);
  flex: 1;
  margin-right: 1rem;
`;

export const InfoValue = styled.span`
  color: var(--white);
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

// pagination

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

type PaginationType = {
  isclicked: boolean;
};

export const Pagination = styled(Link)`
  text-decoration: none;
  padding: 2rem;
  color: var(--white);
  text-transform: uppercase;
  text-align: center;
  font-size: 2.4rem;
  border-bottom: 0.2rem solid transparent;

  &:hover {
    background-color: #99999920;
  }

  ${({ isclicked }: PaginationType) =>
    isclicked &&
    css`
      border-color: var(--gray);
      @media screen and (max-width: 1000px) {
        background-color: #99999920;
      }
    `}

  @media screen and (max-width: 1000px) {
    flex: 1;
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
  }
`;

// videos

export const VideosContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 4rem 2rem;

  @media screen and (max-width: 1024px) {
    margin: 0 3rem 2rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 0 1rem 2rem;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    max-width: 20rem;
  }

  @media screen and (min-width: 769px) {
    max-width: 35.5rem;
  }
`;

export const VideoPosterWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 20rem;
  cursor: pointer;
`;

export const Player = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayerContent = styled.div`
  padding: 1rem;
  background-color: #1e1e2690;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const VideoName = styled.span`
  font-size: 1.4rem;
  color: var(--white);
  font-weight: 50;
`;

export const VideoType = styled(VideoName)`
  color: var(--gray);
`;

// photos

export const PhotosContainer = styled.div`
  margin: 0 4rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 500px) {
    margin: 0 1rem 8rem;
  }
`;

export const PhotosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PhotosLengthText = styled.span`
  font-size: 2.4rem;
  color: var(--gray);
  font-weight: 500;
`;

export const PhotosContent = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 1rem;
`;

export const PhotoLi = styled.li`
  width: 100%;
  margin: auto;

  @media screen and (max-width: 768px) {
    max-width: 20rem;
  }

  @media screen and (min-width: 769px) {
    max-width: 25rem;
  }
`;

// episodes

export const EpisodesContainer = styled.div`
  margin: 0 4rem 2rem;
`;

export const Select = styled.select`
  padding: 1.5rem 2rem;
  color: var(--white);
  background-color: var(--black);
  border: 0.2rem solid var(--gray);
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  display: block;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto 4rem;
    width: 100%;
  }
`;

export const Option = styled.option`
  padding: 1rem 1.5rem;
  color: var(--white);
  background-color: var(--black);
  border: 0.2rem solid var(--gray);
  border-radius: 0.5rem;
  font-size: 1.6rem;
`;

export const EpisodesWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 5rem 2rem;
  flex-wrap: wrap;
`;

export const EpisodeContent = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40rem;
  min-height: 23rem;

  @media screen and (max-width: 768px) {
    margin: auto;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const EpisodeImageContent = styled.div`
  width: 100%;
  height: 23rem;
  background-color: var(--black);

  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

export const EpisodeName = styled.span`
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 700;
`;

export const EpisodeOverview = styled.p`
  font-size: 1.4rem;
  color: var(--gray);
`;
