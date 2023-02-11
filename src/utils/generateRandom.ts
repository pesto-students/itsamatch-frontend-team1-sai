const generateRandom = () => {
  return (Math.random() * (9.0 - 1.0 + 1.0) + 1.0).toFixed(2);
};

export { generateRandom };
