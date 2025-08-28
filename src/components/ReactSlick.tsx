import dynamic from "next/dynamic";
import type React from "react";

interface ICommonTypes {
  className?: string;
  dotsClass?: string;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesPerRow?: number;
  rows?: number;
  initialSlide?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  centerMode?: boolean;
  centerPadding?: string;
  autoplaySpeed?: number;
  cssEase?: string;
  pauseOnHover?: boolean;
  swipeToSlide?: boolean;
  focusOnSelect?: boolean;
}

interface IResponsiveItem {
  breakpoint: number;
  settings: Partial<ICommonTypes>;
}

export interface ISlickProps extends ICommonTypes {
  responsive?: IResponsiveItem[];
  children: React.ReactNode;
}

const ReactSlick = dynamic(() => import("react-slick"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
}) as React.ComponentType<ISlickProps>;

export { ReactSlick };
