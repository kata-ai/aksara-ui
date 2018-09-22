import * as React from 'react';
import styled from 'styled-components';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Button, ToggleButton } from '@kata-kit/button';
import { variables, Theme, KataReset, ThemeAttributes } from '@kata-kit/theme';

interface ExampleProps {
  title?: string;
  code: string;
  scope?: { [key: string]: any };
}

interface ExampleState {
  codeIsVisible: boolean;
}

class Example extends React.Component<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);

    this.state = {
      codeIsVisible: false
    };
  }

  toggleCodePreview = (state: boolean) => {
    this.setState({ codeIsVisible: state });
  };

  render() {
    const { code, scope, title } = this.props;
    const { codeIsVisible } = this.state;

    return (
      <LiveProvider code={code} scope={scope}>
        <Theme values={outerTheme}>
          {themeAttributes => (
            <Wrapper {...themeAttributes} codeIsVisible={codeIsVisible}>
              <TitleWrapper>
                {title && <Title>{title}</Title>}
                <ToggleButton
                  active={codeIsVisible}
                  onToggle={state => this.toggleCodePreview(state)}
                  renderActive={() => (
                    <Button size="sm" isIcon>
                      <i className="icon-method" />
                    </Button>
                  )}
                  renderInactive={() => (
                    <Button size="sm" isIcon>
                      <i className="icon-method" />
                    </Button>
                  )}
                />
              </TitleWrapper>
              <CodeWrapper codeIsVisible={codeIsVisible}>
                <LiveEditor />
              </CodeWrapper>
              <LiveError />
              <Theme values={innerTheme}>
                {innerTheme => (
                  <Inner theme={innerTheme}>
                    <PreviewReset theme={innerTheme}>
                      <LivePreview />
                    </PreviewReset>
                  </Inner>
                )}
              </Theme>
            </Wrapper>
          )}
        </Theme>
      </LiveProvider>
    );
  }
}

export default Example;

const Title = styled('h3')`
  margin-top: 0;
  margin-bottom: ${variables.spaces.space1}};
`;

const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${variables.spaces.space1}};

  ${Title} {
    margin: 0;
  }
`;

const Inner = styled('div')`
  margin-top: ${variables.spaces.space1};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${variables.borderRadiuses.borderRadiusMedium};
  overflow: hidden;
`;

const PreviewReset = styled(KataReset)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};

  .react-live-preview {
    padding: ${variables.spaces.space2};
  }
`;

const CodeWrapper = styled<ExampleState, 'div'>('div')`
  display: ${props => (props.codeIsVisible ? 'block' : 'none')};
  height: 100%;
  max-height: 300px;
  border: 1px solid transparent;
  border-radius: ${variables.borderRadiuses.borderRadiusMedium};
  overflow: hidden;
  overflow-y: auto;
  transition: max-height ${variables.transitions.transitionFast} ease;

  .prism-code {
    font-size: 13px;
    line-height: 20px;
  }
`;

const Wrapper = styled<ThemeAttributes & ExampleState, 'div'>('div')`
  margin: ${variables.spaces.space3} 0;
  padding: ${variables.spaces.space1};
  background-color: ${props =>
    props.codeIsVisible ? props.textColor : props.backgroundColor};
  color: ${props =>
    props.codeIsVisible ? props.backgroundColor : props.textColor};
  border-radius: ${variables.borderRadiuses.borderRadiusMedium};
  overflow: hidden;

  ${Title} {
    color: ${props =>
      props.codeIsVisible ? props.backgroundColor : props.textColor};
  }
`;

const outerTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  textColor: variables.colors.gray70
};

const innerTheme: ThemeAttributes = {
  backgroundColor: variables.colors.white,
  textColor: variables.colors.gray70,
  borderColor: variables.colors.gray30
};
