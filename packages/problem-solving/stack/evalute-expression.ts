class EvaluteExpression {
  private inputs: string[] = [
    // "3 + 5",
    // "10 + 2 * 6",
    // "100 * 2 + 12",
    // "100 * (2 + 12)",
    // "100 * (2 + 12) / 14",
    "3 + 5 * 2 - 8 / 4",
    "3 + 5 * (2 - 8 / 4)",
    // "3 + 5 * (2 - 8 / 4) + 10",
    // "3 + 5 * (2 - 8 / 4) + 10 - 2 * 3",
    // "3 + 5 * (2 - 8 / 4) + 10 - 2 * 3 / 2",
  ];

  private precedence = { "+": 1, "-": 1, "/": 2, "*": 2 };

  private isOperator(token: string) {
    return token in this.precedence;
  }

  private convertToPosfix(tokens: string[]) {
    const postfix: string[] = [];
    const opStack: string[] = [];
    for (let token of tokens) {
      if (!isNaN(Number(token))) {
        postfix.push(token);
      } else if (this.isOperator(token)) {
        const topOpInStack = opStack[opStack.length - 1];
        const tokenPrecidence =
          this.precedence[token as keyof typeof this.precedence];
        const topOpInStackPrecidence =
          this.precedence[topOpInStack as keyof typeof this.precedence];
        while (
          opStack.length &&
          this.isOperator(topOpInStack) &&
          topOpInStackPrecidence > tokenPrecidence
        ) {
          postfix.push(opStack.pop() as string);
        }

        opStack.push(token);
      } else if (token === "(") {
        opStack.push("(");
      } else if (token === ")") {
        while (opStack.length && opStack[opStack.length - 1] !== "(") {
          postfix.push(opStack.pop() as string);
        }
        opStack.pop();
      }
    }

    while (opStack.length) {
      postfix.push(opStack.pop() as string);
    }

    return postfix;
  }

  private eval(expression: string) {
    const regex = /(\d+)|[+\-*/()]/g;
    const tokens = expression.match(regex) as string[];

    const postfix = this.convertToPosfix(tokens);
    const stack = [];
    for (const token of postfix) {
      if (this.isOperator(token)) {
        const b = stack.pop() as number;
        const a = stack.pop() as number;
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
        }
      } else {
        stack.push(Number(token));
      }
    }

    return stack[0];
  }

  run() {
    this.inputs.forEach((input) => {
      console.log(`Evalutation ${input} = ${this.eval(input)}`);
    });
  }
}

new EvaluteExpression().run();
