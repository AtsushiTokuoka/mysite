export function generateUniqueComponentId() {
  return `component-id-${Math.random().toString(36).slice(-8)}`;
}
