---
tag: "react"
slug: "/react/reactjs-forms-and-validation"
date: "2023-02-28"
title: "ReactJS Forms and Validation"
description: "Forms and validation are essential parts of web development, and React provides many tools and techniques for building and validating forms."
category: "Get Started"
order: 6
githubPath: "/react/GetStarted/ReactJSFormsandValidation.md"
contributor:
  [{ name: "Mahady Manana", link: "https://twitter.com/MahadyManana" }]
---

Forms and validation are essential parts of web development, and React provides many tools and techniques for building and validating forms.

```toc
# This code block will gets replaced with the TOC
# Don't worry if it shows in your editor preview
exclude: Table of Contents
tight: true
ordered: false
from-heading: 2
to-heading: 6
class-name: "table-of-contents"
```

## Forms in React

In React, **forms** are similar to standard HTML forms, with a few key differences. To handle form data and submit events, you can use the onSubmit event handler on the form element.

Here's an example of a simple login form in React:

```jsx
function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
```

In the example above, the `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior, retrieves the form data using the `FormData` API, and logs the data to the console.

## Form Validation

**Form validation** is the process of checking if the data entered by the user in the form is valid. In React, you can perform form validation using various techniques.

### Method 1: HTML5 Validation

HTML5 provides built-in form validation attributes that you can use to validate form fields. For example, you can use the `required` attribute to ensure that a field is not empty, or the `type="email"` attribute to ensure that an email address is entered in a valid format.

```jsx
function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
```

In the example above, the `required` attribute is used to ensure that both `email` and `password` fields are not empty before the form is submitted.

### Method 2: Custom Validation

If you need more complex validation logic, you can create custom validation functions and call them in the `handleSubmit` function. Custom validation functions can check if the data entered by the user meets specific requirements and return an error message if not.

```jsx
function LoginForm() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onBlur={(e) => validateEmail(e.target.value)}
        />
        {emailError && <div>{emailError}</div>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onBlur={(e) => validatePassword(e.target.value)}
        />
        {passwordError && <div>{passwordError}</div>}
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
```
