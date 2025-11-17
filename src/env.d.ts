/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    darkMode: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
  }
}

export {};
