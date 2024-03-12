import { baseUrl, serverPaths } from '@/constants/api';

export async function getTopRatedCats<T>(): Promise<T> {
  const path = `${baseUrl}${serverPaths.mostLikedCats}`;
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error('Please try later');
  }
  return res.json() as Promise<T>;
}

export async function getCatsByName<T>(name: string | null): Promise<T> {
  // if (name === null) {
  //   throw new Error('No cat searched');
  // }
  const path = `${baseUrl}${serverPaths.catSearch}?name=${name}`;
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error('Please try later');
  }
  return res.json() as Promise<T>;
}

