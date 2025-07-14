class ContainsDuplicate {
  private inputs = ["malayalam", "dad", "got", "name"];

  check(input: string) {
    const strArry = input.split("");
    return new Set(strArry).size != strArry.length;
  }

  run() {
    this.inputs.forEach((input) => {
      console.log(`${input} - has duplicate ${this.check(input)}`);
    });
  }
}

new ContainsDuplicate().run();
