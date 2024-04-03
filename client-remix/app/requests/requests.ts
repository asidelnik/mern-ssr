import { baseUrl, serverPaths } from '~/constants/api';

export async function getTopRatedCats<T>(): Promise<T> {
  const path = `${baseUrl}${serverPaths.topRated}`;
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error('Please try later');
  }
  return res.json() as Promise<T>;
}

export async function getCatsByName<T>(name: string, page: number, limit: number): Promise<T> {
  // if (name === null) {
  //   throw new Error('No cat searched');
  // }
  const path = `${baseUrl}${serverPaths.search}?name=${name}&page=${page}&limit=${limit}`;
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error('Please try later');
  }
  return res.json() as Promise<T>;
}

export async function getCatById<T>(id: string): Promise<T> {
  const path = `${baseUrl}${serverPaths.cats}/${id}`;
  const res = await fetch(path, { cache: 'no-cache' });
  // if (!res.ok) {
  //   notFound();
  // }
  return res.json() as Promise<T>;
}

export async function likeCat<T>(id: string): Promise<T> {
  const path = `${baseUrl}${serverPaths.likeCat}/${id}`;
  const res = await fetch(path, { method: 'PUT' });
  if (!res.ok) {
    throw new Error('Please try later');
  }
  return res.json() as Promise<T>;
}
