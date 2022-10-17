function testone(x: readonly string[]): string {
  return "";
}

interface Foo {
  readonly bar: string;
}

function testtwo(quantity: string): ReadonlyArray<Foo> {
  return [{ bar: "" }];
}

export type UnitSegment =
  | ((SingleSegment | DoubleSegment) & { readonly length: number })
  | (PairedSegment & {
      readonly inlet: HalfSegment & { readonly length: number };
      readonly outlet: HalfSegment & { readonly length: number };
    });

export type SingleSegment = {
  readonly type: "Single";
  //   readonly boxes: ReadonlyArray<BoxDef>;
  //   readonly ori: OriType;
};

export type DoubleSegment = {
  readonly type: "Double";
  //   readonly boxes: ReadonlyArray<BoxDef>;
  //   readonly ori: OriType;
};

export type PairedSegment = {
  readonly type: "Paired";
  readonly inlet: HalfSegment;
  readonly outlet: HalfSegment;
  //   readonly ori: OriType;
};

export type HalfSegment = {
  //   readonly boxes: ReadonlyArray<BoxDef>;
  readonly part: HalfSegmentPart;
  readonly sameOri: boolean;
};
export type HalfSegmentPart = "lower" | "upper" | "front" | "back";

function pairSingleSegments(): ReadonlyArray<UnitSegment> {
  return [];
}
