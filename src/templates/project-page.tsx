import React from 'react';
import { graphql } from 'gatsby';
import sanitizer from '../utils/sanitizer';

interface ProjectProps {
  readonly data: PageQueryData;
}

const ProjectPage: React.FC<ProjectProps> = ({ data }: ProjectProps) => {
  console.log(data);
  const page = data.markdownRemark;
  const {
    title,
    author,
    firstVersion,
    latestVersion,
    icon,
    project,
    source,
    issues,
  } = page.frontmatter;
  return (
    <div>
      <h1>{page.frontmatter.title}</h1>
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2}>{page.frontmatter.title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Author</th>
            <td>{author}</td>
          </tr>
          <tr>
            <th>First version</th>
            <td>{firstVersion}</td>
          </tr>
          <tr>
            <th>Latest version</th>
            <td>{latestVersion}</td>
          </tr>
        </tbody>
      </table>
      <div dangerouslySetInnerHTML={{ __html: sanitizer(page.html) }} />
    </div>
  );
};

interface PageQueryData {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      author: string;
      firstVersion: string;
      latestVersion: string;
      icon: string;
      project: string;
      source: string;
      issues: string;
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
        author
        firstVersion
        latestVersion
        icon
        project
        source
        issues
      }
    }
  }
`;
