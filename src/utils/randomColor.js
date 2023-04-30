const RANDOM_COLOR = ["#FF86C4", "#CD99FE", "#8FAEFF", "#FFF"];

export const randomColor = () => {
  return RANDOM_COLOR[Math.floor(Math.random() * RANDOM_COLOR.length)];
};