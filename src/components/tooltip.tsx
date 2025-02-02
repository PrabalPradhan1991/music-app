import React, { ReactNode } from "react";

import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Props = {
  triggerComponent: ReactNode;
  contentComponent: ReactNode;
  contentClassName?: string;
  contentSide?: "top" | "bottom" | "right" | "left";
  style?: React.CSSProperties;
  shouldOpen?: boolean;
};

const Tooltip = (props: Props) => {
  const {
    triggerComponent,
    contentComponent,
    contentClassName = "",
    contentSide,
    style,
    shouldOpen,
  } = props;

  const side = contentSide ? { side: contentSide } : {};

  return (
    <TooltipProvider delayDuration={100}>
      <ShadcnTooltip open={shouldOpen}>
        <TooltipTrigger asChild>{triggerComponent}</TooltipTrigger>
        <TooltipContent style={style} className={contentClassName} {...side}>
          {contentComponent}
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
};

export default Tooltip;
