import { CatSmallCardType } from "./CatSmallCardType";

export type CatSmallCardProps = CatSmallCardType & {
  loading?: 'eager' | 'lazy';
};
