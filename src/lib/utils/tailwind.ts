import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 用于合并tailwind类名
 * 补充：合并时，后面的会覆盖前面的，以此保证覆盖性和优先级。
 *
 * @param classes
 */
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
