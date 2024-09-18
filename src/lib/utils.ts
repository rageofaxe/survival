export const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  export const shuffle = (list: any[]) => {
    let result = [...list];
    let currentIndex = result.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [result[currentIndex], result[randomIndex]] = [
        result[randomIndex],
        result[currentIndex],
      ];
    }
    return result;
  };
  
  export const probability = (p: number) => {
      if (random(0, 100) < p) {
          return true
      }
      return false
  }

export const sub = (min: number, sub: number) => {
  if (min - sub >= 0) {
    return min - sub
  }
  return null
}