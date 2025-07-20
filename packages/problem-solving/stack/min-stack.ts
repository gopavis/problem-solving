/**
Minimum Stack

Design a stack class that supports the push, pop, top, and getMin operations.

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
Each function should run in O(1)time

*/

class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];
  constructor(stack?: number[]) {
    if (stack) this.stack = stack;
  }

  public push(val: number) {
    this.stack.push(val);
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  public pop() {
    const poppedValue = this.stack.pop();
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  public top(): number {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }

  public getMin(): number {
    if (this.minStack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.minStack[this.minStack.length - 1];
  }
  public print() {
    console.log("Stack:", this.stack);
    console.log("Min Stack:", this.minStack);
  }
}

const minStack = new MinStack();

minStack.push(0);
minStack.push(-1);
minStack.push(-2);
console.log("min", minStack.getMin()); // return -2

minStack.pop();
minStack.push(3);
console.log(minStack.top()); // return 3
console.log("min", minStack.getMin()); // return -1
minStack.push(-2);
minStack.push(-2);
console.log("min", minStack.getMin()); // return -2

minStack.pop();
console.log("min", minStack.getMin()); // return -2
minStack.pop();
minStack.pop();

console.log("min", minStack.getMin()); // return -1
minStack.pop();
console.log("min", minStack.getMin()); // return 0
