import React from "react";

interface ContainerType {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerType) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}
