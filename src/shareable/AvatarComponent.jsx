import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const AvatarComponent = React.forwardRef(({ imgSrc, className }, ref) => (
  <Avatar className={className} ref={ref}>
    <AvatarImage src={imgSrc} alt="@shadcn" />
    <AvatarFallback>Me</AvatarFallback>
  </Avatar>
));

export default AvatarComponent;
