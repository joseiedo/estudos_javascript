const converteBytes = (num) => {
  const escalaMultiplicacoes = {
    0: num + " B",
    1: (num / 1024).toFixed(2) + " KB",
    2: (num / 1024 ** 2).toFixed(2) + " MB",
    3: (num / 1024 ** 3).toFixed(2) + " GB",
    4: (num / 1024 ** 4).toFixed(2) + " TB",
    5: (num / 1024 ** 5).toFixed(2) + " PB",
    6: (num / 1024 ** 6).toFixed(2) + " EB",
    7: (num / 1024 ** 7).toFixed(2) + " ZB",
    8: (num / 1024 ** 8).toFixed(2) + " YB",
  };
  const verificacoes = [
    num <= 10,
    num <= 10e3,
    num <= 10e6,
    num <= 10e9,
    num <= 10e12,
    num <= 10e15,
    num <= 10e18,
    num <= 10e21,
    num <= 10e24,
  ];
  const index = verificacoes.findIndex((n) => n);

  return index < 0
    ? "Ei! Esse número é grande demais."
    : +escalaMultiplicacoes[index].slice(0, 4) > 1
    ? escalaMultiplicacoes[index]
    : escalaMultiplicacoes[index - 1];
};
