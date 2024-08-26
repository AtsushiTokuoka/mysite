interface User {
  id: number;
  name: string;
  displayName: string;
}

function isUser(obj: unknown[]): obj is User[] {
  return obj.every(
    (item): item is User =>
      typeof item === "object" &&
      item !== null &&
      "id" in item &&
      typeof (item as { id: unknown }).id === "number" &&
      "name" in item &&
      typeof (item as { name: unknown }).name === "string" &&
      "displayName" in item &&
      typeof (item as { displayName: unknown }).displayName === "string"
  );
}

export { User, isUser };
