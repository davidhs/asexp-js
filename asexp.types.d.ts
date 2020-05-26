
type Token = { v: string, li: number, ci: number };

type ASExpressionAtom = string;
type ASExpressionList = ASExpression[];
type ASExpression = ASExpressionAtom | ASExpressionList;
