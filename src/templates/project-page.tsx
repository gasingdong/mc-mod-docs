import React from 'react';
import { graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
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
    project,
    source,
    issues,
  } = page.frontmatter;
  const icon = page.frontmatter.icon.childImageSharp.fluid;
  return (
    <div className="container">
      <div className="infobox card is-pulled-right">
        <header className="card-header">
          <h1 className="card-header-title is-centered">{title}</h1>
        </header>
        <div className="card-content is-flex">
          <div className="card-image">
            <Img fluid={icon} />
          </div>
          <table className="table is-fullwidth">
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
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <a href={project}>Project</a>
          </p>
          <p className="card-footer-item">
            <a href={source}>Source</a>
          </p>
          <p className="card-footer-item">
            <a href={issues}>Issues</a>
          </p>
        </footer>
      </div>
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
      author: string;
      firstVersion: string;
      latestVersion: string;
      icon: {
        childImageSharp: GatsbyImageProps;
      };
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
        icon {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        project
        source
        issues
      }
    }
  }
`;
