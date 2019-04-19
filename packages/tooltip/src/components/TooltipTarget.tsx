import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { flowRight as compose } from 'lodash-es';
import { Overlay } from 'react-overlays';
import contains from 'dom-helpers/query/contains';

const isExists = (needle: string, haystack: string | string[]): boolean => {
  if (Array.isArray(haystack)) {
    return haystack.indexOf(needle) >= 0;
  }

  return needle === haystack;
};

const composeFunctions = (...funcs) => {
  // filter valid functions
  const validFuncs = funcs
    .filter(f => f !== null || f === 'function')
    .filter(f => f);

  return compose(validFuncs);
};

export interface TooltipTargetProps {
  /** Insert the `Tooltip` component here. */
  component: React.ReactNode;
  /** The children node as a target for the tooltip item. */
  children: React.ReactNode;
  /** Placement of the tooltip. */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Set to `true` to make tooltip visible by default */
  defaultShow?: boolean;
  /** Event(s) where the tooltip gets triggered. */
  trigger?: string | string[];
  /** Amount of delay before the tooltip shows and hides (in milliseconds). */
  delay?: number;
  /** Amount of delay before the tooltip hides (in milliseconds). */
  delayHide?: number;
  /** Amount of delay before the tooltip shows (in milliseconds). */
  delayShow?: number;
  /** onClick event handler. */
  onClick?(): void;
  /** onMouseOver event handler. */
  onMouseOver?(): void;
  /** onMouseOut event handler. */
  onMouseOut?(): void;
  /** onFocus event handler. */
  onFocus?(): void;
  /** onBlur event handler. */
  onBlur?(): void;
}

interface TooltipTargetState {
  show: boolean;
}

export default class TooltipTarget extends React.Component<
  TooltipTargetProps,
  TooltipTargetState
> {
  static defaultProps = {
    defaultShow: false,
    placement: 'right',
    trigger: ['click', 'hover', 'focus'],
    delay: 100,
    onClick: () => undefined
  };

  private node: any;
  private overlay: any;
  private targetNodePosition: any;
  private handleMouseOver: (e: any) => void;
  private handleMouseOut: (e: any) => void;
  private hoverShowDelay: any;
  private hoverHideDelay: any;

  constructor(props: any) {
    super(props);

    this.state = {
      show: props.defaultShow
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.createOverlay = this.createOverlay.bind(this);

    this.handleMouseOver = e =>
      this.handleMouseOverOut(this.handleDelayedShow, e, 'fromElement');
    this.handleMouseOut = e =>
      this.handleMouseOverOut(this.handleDelayedHide, e, 'toElement');
  }

  componentDidMount() {
    this.node = document.createElement('div');
    this.targetNodePosition = (ReactDOM.findDOMNode(
      this
    ) as any).getBoundingClientRect();

    this.renderOverlay();
  }

  componentDidUpdate() {
    this.renderOverlay();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    this.node = null;

    clearTimeout(this.hoverShowDelay);
    clearTimeout(this.hoverHideDelay);
  }

  handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleMouseOverOut(handler: any, e: any, relatedNative: string) {
    const target = e.currentTarget;
    const related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !contains(target, related)) {
      handler(e);
    }
  }

  handleDelayedHide = () => {
    if (this.hoverShowDelay != null) {
      clearTimeout(this.hoverShowDelay);
      this.hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this.hoverHideDelay != null) {
      return;
    }

    const delay =
      this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this.hoverHideDelay = setTimeout(() => {
      this.hoverHideDelay = null;
      this.hide();
    }, delay);
  };

  handleDelayedShow = () => {
    if (this.hoverHideDelay != null) {
      clearTimeout(this.hoverHideDelay);
      this.hoverHideDelay = null;
      return;
    }

    if (this.state.show || this.hoverShowDelay != null) {
      return;
    }

    const delay =
      this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this.hoverShowDelay = setTimeout(() => {
      this.hoverShowDelay = null;
      this.show();
    }, delay);
  };

  renderOverlay = () => {
    // TODO: can we use portal here?
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.overlay, this.node);
  };

  show() {
    this.setState({ ...this.state, show: true });
  }

  hide() {
    this.setState({ ...this.state, show: false });
  }

  createOverlay(component: any, overlayProps: any) {
    return (
      <Overlay
        show={this.state.show}
        target={this}
        placement={overlayProps.placement}
      >
        {React.cloneElement(component, {
          ...overlayProps,
          show: this.state.show,
          targetNodePosition: this.targetNodePosition
        })}
      </Overlay>
    );
  }

  render() {
    const { defaultShow, ...props } = this.props;
    const {
      children,
      component,
      trigger,
      onClick,
      onMouseOver,
      onMouseOut,
      onFocus,
      onBlur,
      ...rest
    } = props;
    this.overlay = this.createOverlay(component, rest);

    // Check if children only has ONE child. It will throw error if it has more than one child.
    // Ref: https://reactjs.org/docs/react-api.html#reactchildrenonly
    const childElement = React.Children.only(children);
    const childProps = childElement.props;
    const childTrigger: any = {};

    childTrigger.onClick = composeFunctions(childProps.onClick, onClick);

    if (trigger && isExists('click', trigger)) {
      childTrigger.onClick = composeFunctions(
        childTrigger.onClick,
        this.handleToggle
      );
    }

    if (trigger && isExists('hover', trigger)) {
      childTrigger.onMouseOver = composeFunctions(
        childProps.onMouseOver,
        onMouseOver,
        this.handleMouseOver
      );

      childTrigger.onMouseOut = composeFunctions(
        childProps.onMouseOut,
        onMouseOut,
        this.handleMouseOut
      );
    }

    if (trigger && isExists('focus', trigger)) {
      childTrigger.onFocus = composeFunctions(
        childProps.onFocus,
        onFocus,
        this.handleDelayedShow
      );
      childTrigger.onBlur = composeFunctions(
        childProps.onBlur,
        onBlur,
        this.handleDelayedHide
      );
    }

    return React.cloneElement(childElement, childTrigger);
  }
}
