import React from 'react';
import { graphql } from 'gatsby';
import sanitizer from '../utils/sanitizer';

interface ProjectProps {
  readonly data: PageQueryData;
}

const ProjectPage: React.FC<ProjectProps> = ({ data }: ProjectProps) => {
  console.log(data);
  const page = data.markdownRemark;
  return (
    <div>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizer(page.html) }} />
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

export default ProjectPage;

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
