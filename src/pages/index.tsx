import { Container } from "nes-react";
import * as React from "react";
import "../layouts/index.scss";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <Container>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="title">
          <h3>
            <span>Galaxy Horse</span>
          </h3>
          <span>Just like ... make game</span>
        </div>
      </Container>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
