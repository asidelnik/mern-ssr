'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function search(formData: FormData) {
    const catName = formData.get("cat-name");
    router.push(`/cats-search?name=${catName}`);
  }

  return (
    <>
      <div>Home</div>

      <form action={search}>
        <input type="text" name="cat-name" placeholder="Cat name search" />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
