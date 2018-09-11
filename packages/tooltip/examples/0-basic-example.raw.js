() => (
  <Fragment>
    <TooltipTarget
      placement="top"
      component={<Tooltip>Hello! This is a top tooltip.</Tooltip>}
    >
      <span>Hover over me!</span>
    </TooltipTarget>
    <br />
    <br />
    <TooltipTarget
      placement="right"
      component={<Tooltip>Hello! This is a right tooltip.</Tooltip>}
    >
      <span>Hover over me!</span>
    </TooltipTarget>
    <br />
    <br />
    <TooltipTarget
      placement="bottom"
      component={<Tooltip>Hello! This is a bottom tooltip.</Tooltip>}
    >
      <span>Hover over me!</span>
    </TooltipTarget>
    <br />
    <br />
    <TooltipTarget
      placement="left"
      component={<Tooltip>Hello! This is a left tooltip.</Tooltip>}
    >
      <span>Hover over me!</span>
    </TooltipTarget>
  </Fragment>
);
