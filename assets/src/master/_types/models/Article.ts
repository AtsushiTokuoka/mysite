interface Article {
  id: number;
}

function isArticle(obj: unknown[]): obj is Article[] {
  return obj.every(
    (item): item is Article =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof (item as { id: unknown }).id === "number"
  );
}

export { Article, isArticle };
