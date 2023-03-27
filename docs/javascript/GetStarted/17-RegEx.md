---
tag: "javascript"
slug: "/javascript/regex"
date: "2023-03-25"
# updatedAt: "2023-03-09"
title: "Regular Expressions - Regex"
description: "Regex or Regular Expressions is a pattern-matching language used for searching and manipulating text. It consists of a combination of characters, called metacharacters, that are used to create a search pattern that can match specific sequences of characters within a larger body of text."
category: "Get Started"
order: 17
nextPath: /javascript/maps
prevPath: /javascript/array
githubPath: /javascript/GetStarted/17-RegEx.md
breadcrumb: [{ label: "JavaScript", slug: "/javascript" }]
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

## Introduction

**Regex** or **Regular expressions** is a pattern-matching language used for searching and manipulating text. It consists of a combination of characters, called metacharacters, that are used to create a search pattern that can match specific sequences of characters within a larger body of text.

Regex patterns can be used in a wide variety of applications, including text editors, programming languages, command-line utilities, and more. Some common use cases for regex include:

- Searching and replacing text in large documents
- Parsing and validating input data in software applications
- Filtering and processing log files or other text-based data
- Extracting specific information from web pages or other structured documents
- Regex patterns can be quite complex, but once you learn the basics, they can be a powerful tool for working with text data.

## Quick Examples

Here are quick examples using Regex in JavaScript

Example 1

Suppose we want to match any string that contains the word `cat`. We can use the regular expression /cat/ to achieve this. Here's an example in JavaScript that includes an output:

```js
const text = "I have a cat named Whiskers.";
const pattern = /cat/;

const match = text.match(pattern);

if (match) {
  console.log("Match found! The word 'cat' was found in the text.");
} else {
  console.log("Match not found. The word 'cat' was not found in the text.");
}

// Match found! The word 'cat' was found in the text.
```

Example 2

Suppose we want to match any string that contains a valid email address. This is a bit more complex than our previous example, because email addresses have a specific format. Here's a regular expression that can match a basic email address, along with an output:

```js
const text = "My email is john.doe@example.com.";
const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,}\b/g;
const matches = text.match(emailRegex);

console.log(matches);
// [ 'john.doe@example.com' ]
```

Example 3

Suppose we want to match any string that contains HTML tags, but we also want to extract the tag name and any attributes. This is a more advanced example because HTML tags can have a variety of formats and attributes can have different values. Here's a regular expression that can match HTML tags and extract the tag name and any attributes, along with an output:

```js
const html = "<div class='example' id='myDiv'>Hello, world!</div>";
const pattern = /<\s*(\w+)\s*([^>]*)>/g;

let match;
while ((match = pattern.exec(html)) !== null) {
  const tagName = match[1];
  const attributes = match[2];
  console.log(`Tag name: ${tagName}`);
  console.log(`Attributes: ${attributes}`);
}
// Tag name: div
// Attributes: class='example' id='myDiv'
```

## Regex Methods

### exec()

`exec()` method returns an array containing information about the first match found in a given string. If no match is found, it returns `null`.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /fox/;

const match = pattern.exec(text);

console.log(`Match found at index ${match.index}.`);
```

### test()

`test()` method returns a boolean indicating whether a match is found in a given string.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /fox/;

if (pattern.test(text)) {
  console.log("Match found! The word 'fox' is present in the text.");
} else {
  console.log("Match not found. The word 'fox' is not present in the text.");
}
```

### match()

`match()` method returns an array containing all matches found in a given string.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /[aeiou]/g;

const matches = text.match(pattern);

console.log(`Matches found: ${matches}`);
```

### replace()

This method replaces all occurrences of a pattern in a given string with a replacement string.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /fox/;

const replaced = text.replace(pattern, "cat");

console.log(`Replaced text: ${replaced}`);
```

### split()

This method splits a string into an array of substrings based on a specified pattern.

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /\s+/;

const words = text.split(pattern);

console.log(`Words in text: ${words}`);
```

These are just a few examples of the many methods available for working with regular expressions in JavaScript.


## List of Regex Metacharacters

| Operator     | Explaination                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `.`          | matches any single character except for a newline character                                     |
| `^`          | matches the beginning of a line or string                                                       |
| `$`          | matches the end of a line or string                                                             |
| `\*`         | matches zero or more occurrences of the preceding character or group                            |
| `\+`         | matches one or more occurrences of the preceding character or group                             |
| `?`          | matches zero or one occurrences of the preceding character or group                             |
| `\| `        | matches either the expression before or after the pipe                                          |
| `()`         | create a capturing group that can be referenced later in the expression or replacement string   |
| `[]`         | match any one character within the brackets                                                     |
| `[^]`        | match any one character that is not within the brackets                                         |
| `\`          | escapes special characters or introduces special sequences                                      |
| `{}`         | match a specific number of occurrences of the preceding character or group                      |
| `\b`         | matches a word boundary                                                                         |
| `\B`         | matches a non-word boundary                                                                     |
| `\d`         | matches any digit character (equivalent to `[0-9]`)                                             |
| `\D`         | matches any non-digit character (equivalent to `[^0-9]`)                                        |
| `\s`         | matches any whitespace character (space, tab, newline, etc.)                                    |
| `\S`         | matches any non-whitespace character                                                            |
| `\w`         | matches any word character (letter, digit, or underscore) (equivalent to `[A-Za-z0-9_]`)        |
| `\W`         | matches any non-word character (equivalent to `[^a-za-z0-9_]`)                                  |
| `\n`         | matches a newline character                                                                     |
| `\r`         | matches a carriage return character (typically used in old Mac OS systems)                      |
| `(?i)`       | turns on case-insensitive matching                                                              |
| `[:alpha:]`  | matches any alphabetic character (equivalent to `[A-Za-z]`)                                     |
| `[:alnum:]`  | matches any alphanumeric character (equivalent to `[A-Za-z0-9]`)                                |
| `[:digit:]`  | matches any digit character (equivalent to `\d` or `[0-9]`)                                     |
| `[:space:]`  | matches any whitespace character (equivalent to `\s`)                                           |
| `[:punct:]`  | matches any punctuation character                                                               |
| `[:lower:]`  | matches any lowercase character                                                                 |
| `[:upper:]`  | matches any uppercase character                                                                 |
| `[:xdigit:]` | matches any hexadecimal digit character.                                                        |



<!-- | `(?-i)`      | turns off case-insensitive matching                                                        |
| `(?m)`       | turns on multiline matching                                                                     |
| `(?s)`       | turns on single-line (dot-all) matching                                                         |
| `(?x)`       | allows whitespace and comments within the regex pattern.                                        | -->


## More examples

`.` : Matches any single character except for newline characters (\n, \r), and is used as a wildcard to match any character.

```js
const text = "Hello, World!";
const pattern = /./g;

console.log(text.match(pattern));

// [
//   'H', 'e', 'l', 'l',
//   'o', ',', ' ', 'W',
//   'o', 'r', 'l', 'd',
//   '!'
// ]
```
`^` : Matches the start of a string.

```js
const text = "Hello, World!";
const pattern = /^Hello/;

console.log(pattern.test(text)); // Output: true
```

`$` : Matches the end of a string.

```js
const text = "Hello, World!";
const pattern = /World!$/;

console.log(pattern.test(text)); // Output: true
```

`\*` : Matches zero or more occurrences of the preceding character.

```js
const text = "abbbb";
const pattern = /ab*/;

console.log(pattern.test(text)); // Output: true
```

`\+` : Matches one or more occurrences of the preceding character.

```js
const text = "abbbb";
const pattern = /ab+/;

console.log(pattern.test(text)); // Output: true
```

`?` : Matches zero or one occurrence of the preceding character.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /colou?r/;

console.log(pattern.test(text)); // Output: false
```

`|` : Matches either the expression before or after the | symbol.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /quick|lazy/;

console.log(pattern.test(text)); // Output: true
```

`()` : Groups a series of characters or expressions together to apply modifiers or extract matches.

```js
const text = "John Doe";
const pattern = /(John) (Doe)/;

const match = text.match(pattern);

console.log(match[1]); // Output: "John"
console.log(match[2]); // Output: "Doe"
```

`[]` : Matches any single character within the brackets.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /[aeiou]/g;

console.log(text.match(pattern)); 

// [
//   'e', 'u', 'i', 'o',
//   'o', 'u', 'o', 'e',
//   'e', 'a', 'o'
// ]
```

`[^]` : Matches any single character that is not within the brackets.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /[^aeiou]/g;

console.log(text.match(pattern)); 
// [
//   'T', 'h', ' ', 'q', 'c', 'k',
//   ' ', 'b', 'r', 'w', 'n', ' ',
//   'f', 'x', ' ', 'j', 'm', 'p',
//   's', ' ', 'v', 'r', ' ', 't',
//   'h', ' ', 'l', 'z', 'y', ' ',
//   'd', 'g', '.'
// ]
```

`\` : Escapes a special character and allows it to be used as a literal character.

```js
const text = "The quick brown fox jumps over the lazy dog.";
const pattern = /\./;

console.log(pattern.test(text)); // Output: true
```
`{}` - specify the number of occurrences of the preceding character or group

```js
const regex = /\d{3}/;
const input = "123";
const result = regex.test(input); // true
```

`\b`- match a word boundary

Example: Match "is" only when it is a separate word:

```js
const regex = /\bis\b/;
const input1 = "this is a test";
const input2 = "this isn't a test";
const result1 = regex.test(input1); // true
const result2 = regex.test(input2); // false
```
`\B` - match a non-word boundary

Example: Match "is" only when it is part of a word:

```js
const regex = /\Bis\B/;
const input1 = "this is a test";
const input2 = "this isn't a test";
const result1 = regex.test(input1); // false
const result2 = regex.test(input2); // true
```
`\d` - match any digit character (0-9)

Example: Match a string with at least one digit:

```js
const regex = /\d+/;
const input1 = "123";
const input2 = "abc123def";
const input3 = "abc";
const result1 = regex.test(input1); // true
const result2 = regex.test(input2); // true
const result3 = regex.test(input3); // false
```

`\D` - match any non-digit character

Example: Match a string that does not contain any digits:

```js
const regex = /^\D+$/;
const input1 = "abc";
const input2 = "abc123def";
const result1 = regex.test(input1); // true
const result2 = regex.test(input2); // false
```

`\s` - match any whitespace character (spaces, tabs, line breaks)

Example: Match a string that contains at least one whitespace character:

```js
const regex = /\s+/;
const input1 = "this is a test";
const input2 = "this\thas\ttabs";
const input3 = "thishasnospacestabsorlinebreaks";
const result1 = regex.test(input1); // true
const result2 = regex.test(input2); // true
```

`\S`: Matches any non-whitespace character.

```js
const regex = /\S+/g;
const string = "Hello, world! This is a test.";
const matches = string.match(regex);
console.log(matches); // ["Hello,", "world!", "This", "is", "a", "test."]
```

`\w`: Matches any word character, which includes letters, digits, and underscores.

```js
const regex = /\w+/g;
const string = "Hello, world! This is a test.";
const matches = string.match(regex);
console.log(matches); // ["Hello", "world", "This", "is", "a", "test"]
```

`\W`: Matches any non-word character.

```js
const regex = /\W+/g;
const string = "Hello, world! This is a test.";
const matches = string.match(regex);
console.log(matches); // [", ", "! ", " ", " ", " ", " ", "."]
```

`\n`: Matches a newline character.

```js
const regex = /line\d\n/g;
const string = "line1\nline2\nline3\n";
const matches = string.match(regex);
console.log(matches); // ["line1\n", "line2\n", "line3\n"]
```

`\r`: Matches a carriage return character.

```js
const regex = /line\d\r/g;
const string = "line1\rline2\rline3\r";
const matches = string.match(regex);
console.log(matches); // ["line1\r", "line2\r", "line3\r"]
```

`(?i)`: Makes the regular expression case-insensitive.

```js
const regex = /hello/i;
console.log(regex.test("Hello, world!")); // true
console.log(regex.test("Goodbye, world!")); // false
```
