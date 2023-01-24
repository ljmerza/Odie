const rotateArray = (arr:number[] = [], rotateCount: number) => {
  for (let i = 0; i < rotateCount; i++) {
      arr.unshift(arr.pop() as number);
  }

  return arr;
}

