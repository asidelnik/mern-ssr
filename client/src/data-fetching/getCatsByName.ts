import { baseUrl, serverPaths } from '@/constants/api';

export default async function getCatsByName<T>(
  name: string | null
): Promise<T> {
  if (name === null) {
    throw new Error('No cat searched');
  }
  const path = `${baseUrl}${serverPaths.catSearch}?name=${name}`;
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error('Please try later');
  }
  return res.json() as Promise<T>;
}
