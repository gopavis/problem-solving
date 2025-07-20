class DailyTemp {
  private inputs: number[][] = [
    [30, 38, 30, 36, 35, 40, 28],
    [22, 21, 20],
    [22, 22, 22, 22, 30],
  ];

  execute(input: number[]) {
    const stack: Array<[number, number]> = [];
    for (let i = 0; i < input.length; i++) {
      const num = input[i];
      while (stack.length && num > stack[stack.length - 1][0]) {
        const top = stack.pop();
        if (top) {
          const [, index] = top;
          input[index] = i - index;
        }
      }
      stack.push([num, i]);
    }

    while (stack.length) {
      const top = stack.pop();
      if (top) {
        const [, index] = top;
        input[index] = 0;
      }
    }

    return input;
  }

  run() {
    this.inputs.forEach((input) => {
      console.log(`Input : ${input}`);
      console.log(`Output : ${this.execute(input)}`);
    });
  }
}

new DailyTemp().run();
