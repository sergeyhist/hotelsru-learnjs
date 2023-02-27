let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let messagesDate = new WeakMap;

messagesDate.set(messages[0], Date.now());
messagesDate.set(messages[1], Date.now());

console.log(messagesDate.has(messages[0]))
console.log(messagesDate.get(messages[0]))

messages.shift();
console.log(messagesDate.has(messages[0]))
messages.shift();
console.log(messagesDate.has(messages[0]))
