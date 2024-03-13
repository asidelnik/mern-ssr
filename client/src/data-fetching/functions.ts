import { baseUrl, serverPaths } from '@/constants/api';
import { notFound } from 'next/navigation';

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

export async function getCatById<T>(id: string): Promise<T> {
  const path = `${baseUrl}${serverPaths.cats}/${id}`;
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    notFound();
  }
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