function getRandomElements<Type>(arr: Type[], size: number): Type[] {
  if (arr.length == 0) {
    return [];
  }
  arr.sort(() => 0.5 - Math.random());
  if (arr.length <= size) {
    return arr;
  }
  return arr.slice(0, size);
}

export default getRandomElements;
