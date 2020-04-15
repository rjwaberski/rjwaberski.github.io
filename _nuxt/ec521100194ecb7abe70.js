(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{242:function(t,n){const e={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dynamicMarkdown"},[e("h2",[t._v("Why did I re-do my website with Nuxt?")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("But where do I get the content if I don’t have a server?")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("h3",[t._v("Importing posts on the main page depending on the language")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("h3",[t._v("Generating dynamic pages from Markdown files")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("h2",[t._v("Let’s talk about performance")]),t._v(" "),e("p",[t._v("Do you remember that before I told you that one of my motivations for creating this website was to have a blog that had a good performance?\nWith Nuxt I have achieved it, and I still have a lot to optimize.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[e("image-responsive",{attrs:{imageURL:"blog/vue-nuxt-blog/performance.jpg",width:"952",height:"509",alt:"performance"}})],1),t._v(" "),t._m(19),t._v(" "),e("h2",[t._v("Web in two languages")]),t._v(" "),t._m(20),t._v(" "),e("h2",[t._v("Features and improvements I want to add in the future")]),t._v(" "),t._m(21),t._v(" "),e("h2",[t._v("Things about the webapp that I’ll write another day")]),t._v(" "),e("ul",[t._m(22),t._v(" "),t._m(23),t._v(" "),e("li",[e("p",[t._v("The big mistake I made along the way: Vuex. "),e("nuxt-link",{attrs:{to:"/blog/vuex-what-is-when-use-it"}},[t._v("You can read it here")])],1)]),t._v(" "),t._m(24),t._v(" "),t._m(25)]),t._v(" "),t._m(26),t._v(" "),t._m(27)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Although some of you already know me, I am "),n("a",{attrs:{href:"https://twitter.com/MarinaAisa"}},[this._v("Marina Aísa")]),this._v(", UX Engineer (design and front-end) and I currently work at "),n("a",{attrs:{href:"https://www.holaluz.com/en"}},[this._v("Holaluz")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Last year, 2018, I was very focused on learning more about JavaScript, which was a pending subject and at the same time I learnt "),n("a",{attrs:{href:"https://vuejs.org/"}},[this._v("Vue.js")]),this._v(". Meanwhile at my workplace, we started using "),n("a",{attrs:{href:"https://nuxtjs.org/"}},[this._v("Nuxt.js")]),this._v(" a framework on VueJS to remake both company’s static and dynamic (SPA) webapps into components and create a design system with it.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("My previous website was made with "),n("a",{attrs:{href:"https://middlemanapp.com/"}},[this._v("Middleman")]),this._v(" a static pages generator based on Ruby, so I took the opportunity to redo my website with Nuxt and Vue, in order to:")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[t._v("To learn")]),t._v(" "),e("li",[t._v("Improve performance")]),t._v(" "),e("li",[t._v("Add functionality as a blog and portfolio system")]),t._v(" "),e("li",[t._v("Add two languages, Spanish and English, "),e("strong",[t._v("also in blog posts")]),t._v(" but independently, since I guess I won’t translate every post in both languages.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("What attracts me the most of Nuxt is the philosophy "),n("em",[this._v("serverless")]),this._v(" (Nuxt can also be SSR tho) and the static prerendering it provides to SPA applications. Briefly, with this stack you can combine the best of a static website: compiled HTML -> what leads to a better SEO, plus the best of a "),n("em",[this._v("single page application")]),this._v(": Webpack, cache optimizations, lazy-loading, functions and asynchronous data…")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Nuxt, by following the architecture "),n("a",{attrs:{href:"https://jamstack.org/"}},[this._v("JAMStack")]),this._v(" is built to get content through APIs, so many people use headless CMSs like "),n("a",{attrs:{href:"https://www.contentful.com/"}},[this._v("Contentful")]),this._v(" or "),n("a",{attrs:{href:"https://prismic.io/"}},[this._v("Prismic")]),this._v(". At first I thought they were interesting options but I realized that it wasn’t necessary for a website like mine since CMSs are oriented to be used by people without technical knowledge, besides they are expensive, they save assets on their own servers and they aren’t the best option if I wanted to have the best performance.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("Therefore, I decided to use a Markdowns system that I store in Github and call dynamically.")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Using the asynchronous function "),e("code",{pre:!0},[t._v("asyncData")]),t._v(" that Nuxt provides only in its pages (it is not avalaible in its components) I import the Markdowns that I have saved in the folder "),e("code",{pre:!0},[t._v("content")]),t._v(" of the project. Later I return them in the form of a promise as an array of objects. As you can see below, this import depends on the constant "),e("code",{pre:!0},[t._v("blogs")]),t._v(" which will be the array "),e("code",{pre:!0},[t._v("blogsEs")]),t._v(" or "),e("code",{pre:!0},[t._v("blogsEn")]),t._v(" depending on the language of the page stored on the Vuex’s state.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-javascript"},[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEn "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/en/blogsEn.js'")]),t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEs "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/es/blogsEs.js'")]),t._v("\n\n"),e("span",{staticClass:"token keyword"},[t._v("async")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncData")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v("}")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" blogs "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" app"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("i18n"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale "),e("span",{staticClass:"token operator"},[t._v("===")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'en'")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("?")]),t._v(" blogsEn "),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" blogsEs\n  \n  "),e("span",{staticClass:"token keyword"},[t._v("async")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("function")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncImport")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blogName")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" wholeMD "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("await")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("import")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("~/content/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("i18n"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v("/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("blogName"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v(".md")]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" wholeMD"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("attributes\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\n  "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" Promise"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("all")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blogs"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("map")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blog")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncImport")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blog"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("then")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("res")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n      blogs"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" res\n    "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("The reason why I’m importing the arrays containing the blogs names is because I want to use it also to generate the static pages through the object "),n("a",{attrs:{href:"https://nuxtjs.org/api/configuration-generate/"}},[this._v("generate")]),this._v(" in the Nuxt configuration, file "),n("code",{pre:!0},[this._v("nuxt.config.js")]),this._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-javascript"},[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEn "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/en/blogsEn.js'")]),t._v("\n"),e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" blogsEs "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'~/contents/es/blogsEs.js'")]),t._v("\n\ngenerate"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  routes"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("\n    "),e("span",{staticClass:"token string"},[t._v("'/es'")]),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),e("span",{staticClass:"token string"},[t._v("'404'")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v("]")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("concat")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blogsEn"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("map")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blog")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("blog"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  "),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("concat")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("blogsEs"),e("span",{staticClass:"token punctuation"},[t._v(".")]),e("span",{staticClass:"token function"},[t._v("map")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[t._v("blog")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("es/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("blog"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Nuxt has a very interesting functionality, the creation of "),n("a",{attrs:{href:"https://nuxtjs.org/guide/routing/#dynamic-routes"}},[this._v("dynamic routes")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("In the next import I use the function "),n("code",{pre:!0},[this._v("asyncData")]),this._v(" instead of "),n("code",{pre:!0},[this._v("data")]),this._v(" as it’s usual in Vue, to first import each Markdown and then return a new object with the information I want to use in the template of the page.\n"),n("strong",[this._v("The URL will be equal to each markdown file’s name.")]),this._v("\nIn the case that the md file doesn’t exist it will simply go to error page 404.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",{staticClass:"language-javascript"},[e("code",{staticClass:"language-javascript"},[e("span",{staticClass:"token keyword"},[t._v("async")]),t._v(" "),e("span",{staticClass:"token function"},[t._v("asyncData")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token parameter"},[e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("params"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" app"),e("span",{staticClass:"token punctuation"},[t._v("}")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" fileContent "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("await")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("import")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token template-string"},[e("span",{staticClass:"token template-punctuation string"},[t._v("`")]),e("span",{staticClass:"token string"},[t._v("~/contents/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("app"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("i18n"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("locale"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v("/blog/")]),e("span",{staticClass:"token interpolation"},[e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("${")]),t._v("params"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("slug"),e("span",{staticClass:"token interpolation-punctuation punctuation"},[t._v("}")])]),e("span",{staticClass:"token string"},[t._v(".md")]),e("span",{staticClass:"token template-punctuation string"},[t._v("`")])]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  "),e("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" attr "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" fileContent"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("attributes\n  "),e("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n    colors"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("colors"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    date"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("date"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    description"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("description"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    id"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("id"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    name"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" params"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("slug"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    related"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("related"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    renderFunc"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" fileContent"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("vue"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("render"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    staticRenderFuncs"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" fileContent"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("vue"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("staticRenderFns"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    title"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("title"),e("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n    urlTranslation"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" attr"),e("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("urlTranslation\n  "),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("If we wanted to create a portfolio in the future, it would be exactly the same as the blog. We would create within "),n("code",{pre:!0},[this._v("contents")]),this._v(" a folder called "),n("code",{pre:!0},[this._v("portfolio")]),this._v(" and we would do the same process that we have done with "),n("code",{pre:!0},[this._v("blogs")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("The loader for Webpack Markdown files that I use is: "),n("a",{attrs:{href:"https://www.npmjs.com/package/frontmatter-markdown-loader"}},[this._v("frontmatter-markdown-loader")]),this._v(" that allows me to put Vue components inside markdown files, as well as extract the "),n("code",{pre:!0},[this._v("frontmatter")]),this._v(" attributes as they do static generators like Jekyll. For making the code look pretty I apply: "),n("a",{attrs:{href:"https://highlightjs.org/"}},[this._v("HighlightJS")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("If you have arrived here, you have probably thought: "),n("em",[this._v("“OMG Marina, you could just have made a blog in "),n("a",{attrs:{href:"https://medium.com/"}},[this._v("Medium")]),this._v(" and save you all this crazy work”")]),this._v(" and right now you’re going to understand why I don’t like Medium.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("While writing in Medium "),n("strong",[this._v("you don’t have control over your blog")]),this._v(" such as CSS, SEO, adding functionalities, "),n("strong",[this._v("Medium owns your content")]),this._v(", you have a limit of articles read for free… and "),n("strong",[this._v("their performance seems quite bad")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Thanks to Google’s tool "),n("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/audit/"}},[this._v("Lighthouse")]),this._v(" we can analyze and compare Medium with my website.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("As you can see, Medium does a lot of things well, but performance is not one of them. This translates into user experience as a very slow load, especially on mobile devices. "),n("strong",[this._v("Because performance is user experience.")]),this._v(" We’ll talk more about it another day.\nThe interesting thing here is that with Nuxt I managed to reach a "),n("strong",[this._v("94%")]),this._v(" performance compared to 40% offered by Medium in the first load, but the best thing is that since using cache systems, "),n("strong",[this._v("the second load on my website the performance is 100%")]),this._v(" while Medium scores 60%.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("To translate the web in English and Spanish I use "),n("a",{attrs:{href:"https://github.com/nuxt-community/nuxt-i18n"}},[this._v("nuxt-i18n")]),this._v(". It is a layer above "),n("a",{attrs:{href:"https://github.com/kazupon/vue-i18n"}},[this._v("vue-i18n")]),this._v(" which has lazy-loading translations. "),n("em",[this._v("Nuxt-i18n")]),this._v(" automates how translations are worked on the Vue router, simplifying it for Nuxt. I recommend it for the router, although it has some things that I couldn’t managed to make it work as the redirection cookie based on the browser language. But it’s a problem that you have to accept if you use a new framework like Nuxt is.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("p",[t._v("I am not very happy with the amount of JS that I am putting into the web, I have more than 100k of synchronous JS and I want to reduce it. I still have to figure out how. My relationship with JS is love/hate. On the one hand I love everything you can do with it and on the other I hate it because it has a terrible cost on the performance of the page.")])]),t._v(" "),e("li",[e("p",[t._v("Adding a portfolio system with dynamic pages like the blog.")])]),t._v(" "),e("li",[e("p",[t._v("Improvements in design and usability.")])]),t._v(" "),e("li",[e("p",[t._v("Making the web totally accessible from the design to the code.")])]),t._v(" "),e("li",[e("p",[t._v("Cleaning CSS that I don’t use and try to reduce it.")])]),t._v(" "),e("li",[e("p",[t._v("I criticize a lot Medium but I really like its design and some of its features, in fact I would like to add its famous "),e("em",[t._v("clap")]),t._v(" button to my website.")])]),t._v(" "),e("li",[e("p",[t._v("Add comments to each post.")])]),t._v(" "),e("li",[e("p",[t._v("Add similar posts to the one you’ve read.")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Lazy loading of components and images in Nuxt, I will tell you which packages I use and the component I did to render a first image as a "),n("em",[this._v("placeholder")]),this._v(" in base64 and afterwards asynchronously the final image.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("How to use "),n("code",{pre:!0},[this._v("analyze")]),this._v(" of Nuxt to analyze the JS generated by Webpack in our app and to optimize it.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("How to put emojis on your website through a sprite made in SCSS so that they always look the same regardless of the browser or device.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Loading Vue asynchronous components with the practical example of the travel map that is in the home page.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("I thought about publishing a starter about it but being realist, I wouldn’t have enough time to maintain it. I think this post explains how to do it very well, but if you have any doubt left, you can always contact me at my email: "),n("a",{attrs:{href:"mailto:marina@marinaaisa.com"}},[this._v("marina@marinaaisa")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Since I don’t have a comments section on each post, I would love to continue the conversation on "),n("a",{attrs:{href:"https://twitter.com/MarinaAisa"}},[this._v("Twitter")]),this._v(". All feedback is welcome! If you think there is something that it can be improved, you would help me a lot.")])}]};t.exports={attributes:{name:"blog-using-vue-nuxt-markdown",title:"Website with blog and portfolio using Vue.js + Nuxt + Markdown",year:"1 January 2019",color:"#8e7964",trans:"blog-usando-vue-nuxt-markdown",id:"vue-nuxt-blog",description:"How I created my new website with portfolio and blog in two languages. What technology I used and why.\n"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);