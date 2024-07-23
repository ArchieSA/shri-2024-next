export async function getHeadphones() {
  const result = await fetch("http://localhost:3001/api/products", {
    next: { tags: ["headphones"] },
  });

  return result.json();
}

export async function getTopHeadphones() {
  const result = await fetch("http://localhost:3001/api/products");

  const headphones = await result.json();

  return [headphones[0], headphones[5]];
}

export async function getHeadphoneById(headphoneId) {
  const result = await fetch(
    `http://localhost:3001/api/product/${headphoneId}`
  );

  return result.json();
}
