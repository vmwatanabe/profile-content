export const getFileName = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "1";
    default:
      return pathname.substr(1, 1);
  }
};
