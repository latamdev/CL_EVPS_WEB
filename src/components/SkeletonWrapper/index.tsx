import React, { ReactNode } from "react";

interface SkeletonWrapperProps {
  isLoading: boolean;
  skeleton: ReactNode;
  children: JSX.Element;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = (props) => {
  const { isLoading, skeleton, children } = props;
  return isLoading ? <>{skeleton}</> : <>{children}</>;
};

export default SkeletonWrapper;
