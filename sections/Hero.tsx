import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /** 
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is entirely editable, tailor it freely.",
  image,
  placement = "left",
  cta,
}: Props) {
  return (
    <div class="flex">
      <div class="w-1/2 p-4">
        <h2 class="text-xl font-semibold mb-4">First Column (Text)</h2>
        <p>This is some text content in the first column.</p>
        <p>You can add more content here.</p>
      </div>
      <div class="w-1/2 p-4">
        <h2 class="text-xl font-semibold mb-4">Second Column (Scrollable List)</h2>
        <ul class="overflow-y-auto max-h-80 border border-gray-300 rounded p-4">
          <li class="mb-2">Item 1</li>
          <li class="mb-2">Item 2</li>
          <li class="mb-2">Item 3</li>
          <li class="mb-2">Item 4</li>
          <li class="mb-2">Item 5</li>
          <li class="mb-2">Item 6</li>
          <li class="mb-2">Item 7</li>
          <li class="mb-2">Item 8</li>
          <li class="mb-2">Item 9</li>
          <li>Item 10</li>
        </ul>
      </div>
    </div>
  );
}
