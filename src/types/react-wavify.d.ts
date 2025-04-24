declare module "react-wavify" {
  import React from "react";

  interface WaveProps {
    fill?: string;
    paused?: boolean;
    style?: React.CSSProperties;
    options?: {
      height?: number;
      amplitude?: number;
      speed?: number;
      points?: number;
      [key: string]: any;
    };
    children?: React.ReactNode;
  }

  const Wave: React.FC<WaveProps>;
  export default Wave;
}
