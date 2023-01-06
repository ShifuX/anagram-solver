function solveAnagram(s, s2) {
  const map = new Map();

  for (let c of [...s]) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (let c of [...s2]) {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    } else {
      return false;
    }
  }

  for (let i of map.values()) {
    if (i !== 0) return false;
  }

  return true;
}

module.exports = {
  solveAnagram: solveAnagram,
};
