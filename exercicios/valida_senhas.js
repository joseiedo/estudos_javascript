const validaComplexidade = (str) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,32}$/.test(str) ? 1 : 0;
