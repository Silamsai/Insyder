import Image from "next/image";

/** Insyder logo mark, served from /public/assets/logo.svg */
export default function Logo({ size = 28 }: { size?: number }) {
  return <Image src="/assets/logo.svg" width={size} height={size} alt="" aria-hidden="true" priority />;
}
