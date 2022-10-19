export type DoubleSegment = {
  readonly type: "Double";
};

export type BoxDef = {
  readonly type: "BoxDef";
};

export const doubleSegment = (boxes: BoxDef): DoubleSegment => ({
  type: "Double",
});
