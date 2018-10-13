import * as React from 'react';

export interface WithStateProps<S> {
  initialState: S;

  children: (
    state: S,
    api: {
      setState: <K extends keyof S>(
        state: Pick<S, K> | S | null,
        callback?: () => void
      ) => void;
    }
  ) => React.ReactNode;
}

class WithState<S = {}> extends React.Component<WithStateProps<S>, S> {
  readonly state: S = this.props.initialState;

  render() {
    const { children } = this.props;
    return children(this.state, {
      setState: (state, cb) => this.setState(state, cb)
    });
  }
}

export default WithState;
