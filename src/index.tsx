interface AnExternalFunctionType {
  (a: string): string;
  extraProperty: string | undefined;
}

export const Icons: AnExternalFunctionType = () => {
  return "";
};
