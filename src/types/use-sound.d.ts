declare module "use-sound" {
  type HookOptions = {
    volume?: number;
    soundEnabled?: boolean;
    interrupt?: boolean;
    playbackRate?: number;
    loop?: boolean;
    onload?: () => void;
    onplay?: () => void;
    onend?: () => void;
    onpause?: () => void;
    onstop?: () => void;
  };

  type PlayFunction = () => void;

  type ExposedData = {
    sound: any;
    stop: (id?: string) => void;
    pause: (id?: string) => void;
    duration: number | null;
  };

  export default function useSound(
    src: string,
    options?: HookOptions
  ): [PlayFunction, ExposedData];
}
