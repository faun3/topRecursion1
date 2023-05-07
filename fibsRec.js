function fibsRec(size) {
  if (size === 1) return [0];
  if (size === 2) return [0, 1];
  else {
    return [
      ...fibsRec(size - 1),
      fibsRec(size - 1)[size - 2] + fibsRec(size - 1)[size - 3],
    ];
  }
}

console.log(fibsRec(5));
