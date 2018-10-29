import React from 'react';
import hljs from 'highlight.js';
import styled from 'styled-components';
import hljsTheme from './hljs-theme';

interface Props {
  value: string;
  language: string;
}

class CodeBlock extends React.PureComponent<Props> {
  codeEl: HTMLElement;

  constructor(props: Props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el: HTMLElement) {
    this.codeEl = el;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    return (
      <Pre>
        <code ref={this.setRef} className={`language-${this.props.language}`}>
          {this.props.value}
        </code>
      </Pre>
    );
  }
}

export default CodeBlock;

export const Pre = styled('pre')`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 16px;
  color: #abb2bf;
  background: #282c34;
  font-size: 90%;

  code {
    color: #abb2bf;
    background: #282c34;

    ${hljsTheme};
  }
`;
