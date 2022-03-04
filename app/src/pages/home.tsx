import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/common/GlobalStyle';
// import Introdution from 'components/main/Introdution';
import Intro from 'components/main/Intro';
import { graphql } from 'gatsby';
import { PostListType } from 'components/main/PostList/types';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: PostListType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const Home: React.FC<Props> = ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const outerRef = useRef<any>();
  // const outerRef = useRef<HTMLDivElement>(null);
  const pageCount = useRef(2);
  const currentPage = useRef(0);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      const screenHeight = window.innerHeight;
      const { deltaY } = e;

      if (deltaY > 0 && currentPage.current < pageCount.current) {
        currentPage.current += 1;
        outerRef.current.scrollTo({
          top: screenHeight * currentPage.current,
          left: 0,
          behavior: 'smooth',
        });
      } else if (deltaY < 0 && currentPage.current > 0) {
        currentPage.current -= 1;
        outerRef.current.scrollTo({
          top: screenHeight * currentPage.current,
          left: 0,
          behavior: 'smooth',
        });
      }

      console.log(currentPage.current);
    };

    outerRef.current?.addEventListener('wheel', wheelHandler);

    return () => {
      outerRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  console.log(edges);
  return (
    <Background ref={outerRef} className="outer">
      <Inner color="red"></Inner>
      <Inner color="blue"></Inner>
      <Inner color="yellow"></Inner>
      {/* <Intro image={gatsbyImageData} /> */}

      <GlobalStyle />
    </Background>
  );
};

export default Home;

const Background = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::--webkit-scrollbar {
    display: none;
  }

  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

const Inner = styled.div<{ color: string }>`
  height: 100vh;
  background-color: ${props => props.color};
`;

export const getData = graphql`
  query getData {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;
