function calculateProbability() {
  // Общее количество возможных исходов при 3 подбрасываниях (есть 2 возможных исхода - орел или решка)

  const totalOutcomes = 2 ** 3; // 2^3 = 8

  // Количество благоприятных исходов (2 орла и 1 решка)
  // ООР, ОРО, РОО
  const favorableOutcomes = 3;

  // Вычисление вероятности
  const probability = favorableOutcomes / totalOutcomes;

  return probability;
}

const result = calculateProbability();
console.log(`Вероятность того, что выпадет ровно два орла: ${result}`);
