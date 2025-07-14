class validAnagram {
  private inputs = [
    ["anagram", "nagaram"],
    ["rat", "car"],
    ["hello", "world"],
  ];

  check(input: string[]) {
    const [str1, str2] = input;
    if (str1.length !== str2.length) {
      return false;
    }
    const charCount: { [key: string]: number } = {};
    for (const char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
      if (!charCount[char]) return false;
      charCount[char]--;

      if (charCount[char] < 0) return false;
    }

    return true;
  }

  run() {
    this.inputs.forEach((input) => {
      console.log(
        `${input[0]} and ${input[1]} - are anagrams: ${this.check(input)}`
      );
    });
  }
}

new validAnagram().run();
