import React from 'react';
import { graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import sanitizer from '../utils/sanitizer';

interface ProjectProps {
  readonly data: PageQueryData;
}

const Block: React.FC<ProjectProps> = ({ data }: ProjectProps) => {
  console.log(data);
  const page = data.markdownRemark;
  const { title } = page.frontmatter;
  return (
    <div className="container">
      <div className="project-title title">{title}</div>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: sanitizer(page.html) }}
      />
    </div>
  );
};

interface PageQueryData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
    };
  };
}

export default Block;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
