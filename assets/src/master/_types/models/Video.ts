interface Video {
  id: number;
}

function isVideo(obj: unknown[]): obj is Video[] {
  return obj.every(
    (item): item is Video =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof (item as { id: unknown }).id === "number"
  );
}

export { Video, isVideo };
