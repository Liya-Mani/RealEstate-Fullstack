export const formatPrice = (value: number): string => {
  if (value >= 1000000) {
    const m = (value / 1000000).toFixed(1).replace(/\.0$/, "");
    return `R${m}M`;
  }
  return `R${value.toLocaleString("en-ZA")}`;
};