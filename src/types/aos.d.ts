declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    offset?: number;
    delay?: number;
    once?: boolean;
    easing?: string;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: string | boolean;
  }

  interface AOS {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOS;
  export default AOS;
}
