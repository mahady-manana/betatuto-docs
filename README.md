# Betatuto Developers Community

A comprehensive documentation platform for JavaScript, TypeScript, Node, and React. Our website is a community-driven project, created by developers for developers, with the aim of providing high-quality and up-to-date resources for everyone interested in these technologies.

## Getting Started

- Clone this repo

  ```batch
  git clone https://github.com/mahady-manana/betatuto-docs.git
  ```

- Now, you have 2 options to start editing:
  1. Using development server, or
  2. Using VS Code Extensions.

### Using development server.

- Install Node.js ^18.0.0 on your local machine

- You can use tools like NVM to manage your node version.

- Then, change directory to the newly created one and execute below commands:

  ```batch
  # go to newly created directory
  cd betatuto-docs

  # install deps
  yarn install

  # start dev server
  yarn dev
  ```

- Then go to: [http://localhost:8000](http://localhost:8000)

### Using VS Code extensions like

You can directly edit file and see preview without a development server by using VS Code extensions like **Markdown All in One** or any markdown extension for that editor.

## TODO

- [x] Add JavaScript documentation
- [ ] Add React.js documentation
- [ ] Add Node.js documentation
- [ ] Add TypeScript documentation

## CUSTOM MARKDOWN SYNTAX

Success, checked ....

```
::checked  [your_text] checked::

// If you only need the icon, you can do this

::checked checked::

```

Failed, error....

```
::error  [your_text] error::

// If you only need the icon, you can do this

::error error::
```


the result will be like this:

![check or error syntax](/img/checked-error.png)


Outside code snippet

```
::checked
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi culpa repellendus ullam reprehenderit voluptates labore dolorem iusto, hic et? Iste laudantium molestiae alias totam natus voluptatum, officia ex? Officia?
checked::

::info
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi culpa repellendus ullam reprehenderit voluptates labore dolorem iusto, hic et? Iste laudantium molestiae alias totam natus voluptatum, officia ex? Officia?
info::

::warning
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi culpa repellendus ullam reprehenderit voluptates labore dolorem iusto, hic et? Iste laudantium molestiae alias totam natus voluptatum, officia ex? Officia?
warning::

::error
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex commodi culpa repellendus ullam reprehenderit voluptates labore dolorem iusto, hic et? Iste laudantium molestiae alias totam natus voluptatum, officia ex? Officia?
error::
```

![preview syntax](/img/syntax-preview.png)

## Contributing

Please read our [How To](HOW_TO.md) before contributing to this project.
Please read our [Contribution Guidelines](CONTRUBITION_GUIDELINES.md) before contributing to this project.

## Code of Conduct

We have adopted a [Code of Conduct](CODE_OF_CONDUCT.md) that we expect all contributors to adhere to. Please read and understand this code before contributing to our project.

## Bugs and Feature Requests

If you find a bug or would like to request a new feature, please create a new issue.

## License

This project is under MIT License

## Contact

If you have any questions or comments about this project, please contact us at [insert contact information].
