# ![Eatty](https://raw.githubusercontent.com/git9it/Recipe-aggregator/main/images/demo/Screenshot.png)
# Eatty - receipt aggregator
<table>
<tr>
<td>
  
  A web app helps to find receipt by dish name or ingredient. Fast and easy to use. Just type in search bar what you want to cook and you will get the best receipts :)
</td>
</tr>
</table>


## Demo
Here is a working live demo :  https://recipe-aggregator.vercel.app/

## Install
```bash
git clone https://github.com/git9it/Recipe-aggregator.git recipe-aggregator
cd recipe-aggregator
git checkout recipe-aggregator
npm install
```

---
## Run
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/git9it/Recipe-aggregator/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/git9it/Recipe-aggregator/issues/new). Please include sample queries and their corresponding results.


## Built with 

- [Next.js](https://nextjs.org/) - Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Tailwind](https://tailwindcss.com/) - Tailwind CSS is self-described as a utility first CSS framework. Rather than focusing on the functionality of the item being styled, Tailwind is centered around how it should be displayed. This makes it easier for the developer to test out new styles and change the layout.


## To-do
- Find way to improve useFetch hook
- Rid off typescript mess
- Add comments and make code clear
- Mobile version(?)



