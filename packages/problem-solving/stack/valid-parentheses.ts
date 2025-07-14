class ValidParentheses {
  private inputs: string[] = [
    "( a + b + ( d + e ))",
    "()[]{}",
    "(]",
    "([)]",
    "{[]}",
  ];
  private readonly pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  private getOpeningPair(token: string) {
    const pair = { ")": "(", "}": "{", "]": "[" };
    return pair[token as keyof typeof pair];
  }

  isValid1(input: string) {
    const regex = /[(,),\[,\],{,}]/g;
    const tokens = input.match(regex) as string[];
    const stack = [];

    for (const token of tokens) {
      if ("([{".includes(token)) {
        stack.push(token);
      } else {
        const openingPair = this.getOpeningPair(token);
        if (
          openingPair &&
          stack.length &&
          stack[stack.length - 1] === openingPair
        ) {
          stack.pop();
        }
      }
    }

    return stack.length === 0;
  }

  isValid(input: string): boolean {
    const expression = input.split("").map((ch) => ch.trim());
    const stack: string[] = [];
    const vailidChars = new Set(["(", ")", "{", "}", "[", "]"]);

    for (let ch of expression) {
      if (!vailidChars.has(ch)) continue;
      const openingPair = this.pairs[ch];
      if (openingPair) {
        if (stack.length !== 0 && stack[stack.length - 1] === openingPair) {
          stack.pop(); // Pop the matching opening bracket
        }
      } else {
        stack.push(ch);
      }
    }
    return stack.length === 0;
  }

  run() {
    this.inputs.forEach((input) => {
      const result = this.isValid(input);
      const result1 = this.isValid1(input);
      console.log(`Input: "${input}" - Valid: ${result}, ${result1}`);
    });
  }
}

new ValidParentheses().run();
