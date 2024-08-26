interface Photo {
  id: number;
}

function isPhoto(obj: unknown[]): obj is Photo[] {
  return obj.every(
    (item): item is Photo =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof (item as { id: unknown }).id === "number"
  );
}

export { Photo, isPhoto };
