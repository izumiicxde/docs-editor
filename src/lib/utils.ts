import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateColorForName(name: string) {
  const nameToNumber = [...name].reduce(
    (sum, char) => sum + char.charCodeAt(0) * 31,
    0
  ); // Use a multiplier for better spread
  const hue = nameToNumber % 320; // Retain original 320 range for diverse colors
  return `hsl(${hue}, 80%, 60%)`;
}
