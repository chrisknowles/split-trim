export function splitTrim(str, char) {
  if (!str || !str.split) {
    return [];
  }
  return str.split(char).reduce((acc, part) => {
    const trimmed = part.trim();
    if (trimmed.length) {
      acc.push(trimmed);
    }
    return acc;
  }, []);
}
