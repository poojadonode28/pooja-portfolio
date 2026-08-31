import type { SimpleIcon } from "simple-icons";

type BrandIconProps = {
  readonly icon: SimpleIcon;
};

const BrandIcon = ({ icon }: BrandIconProps) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d={icon.path} fill="currentColor" />
  </svg>
);

export default BrandIcon;
