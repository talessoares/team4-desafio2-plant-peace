declare module "@splidejs/react-splide" {
  import { Component, ReactNode } from "react";

  export interface BreakpointOptions {
    perPage?: number;
    // Outras opções podem ser adicionadas aqui
  }

  export interface SplideOptions {
    type?: "slide" | "loop" | "fade";
    height?: number | string;
    width?: number | string;
    perPage?: number;
    perMove?: number;
    autoplay?: boolean;
    pauseOnHover?: boolean;
    rewind?: boolean;
    pagination?: boolean;
    interval?: number;
    focus?: "center" | "first";
    arrows?: boolean;
    breakpoints?: { [key: number]: BreakpointOptions };
    // Outras opções podem ser adicionadas aqui
  }

  export interface SplideProps {
    options?: SplideOptions;
    className?: string;
    onInit?: (splide: any) => void;
    children?: ReactNode; // Adicione esta linha
  }

  export class Splide extends Component<SplideProps> {}
  export class SplideSlide extends Component<{ children?: ReactNode }> {}
}
