class GenerateParentheses {
  private backtrack(
    openCount: number,
    closeCount: number,
    maxCount: number,
    value: string,
    results: string[]
  ) {
    if (openCount === closeCount && openCount === maxCount) {
      results.push(value);
      return;
    }

    if (openCount < maxCount) {
      this.backtrack(openCount + 1, closeCount, maxCount, value + "(", results);
    }

    if (closeCount < openCount) {
      this.backtrack(openCount, closeCount + 1, maxCount, value + ")", results);
    }
  }

  run(n: number) {
    console.log(`Generate P for ${n}`);
    const results: string[] = [];
    this.backtrack(0, 0, n, "", results);
    console.log(`Output : ${results.join(" | ")}`);
  }
}

new GenerateParentheses().run(1);
new GenerateParentheses().run(2);
new GenerateParentheses().run(3);
