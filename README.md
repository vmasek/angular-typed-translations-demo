# Angular typed translations demo

This is an example app project for blog post about [Typed translations in Angular](https://medium.com/@vmasek/angular-typed-translations-29353f0a60bc)

It demonstrates usage of lazy loading, dependency injection and TypeScript to achieve internationalised application.

# Project structure

```
src/app
├─ app.component.ts
├─ app.module.ts                   // only what is needed for whole app are imported here
├─ app-routing.module.ts           // lazy routing of i18n site modules
├─ i18n
│  ├── cs.translation.ts           // Czech translation data object
│  ├── en.translation.ts           // English translation data object
│  └── utils.ts                    // exports of Translation type and injection token
└─ site                            // directory containing site views and i18n site wrappers
   ├─ home
   │  ├─ home.component.css
   │  ├─ home.component.html       // translation used in template
   │  ├─ home.component.ts         // translation injected in constructor
   │  ├─ home.module.ts
   │  └─ home-routing.module.ts
   ├─ info
   │  ├─ info.component.css
   │  ├─ info.component.html       // translation used in template
   │  ├─ info.component.ts         // translation injected in constructor
   │  ├─ info.module.ts
   │  └─ info-routing.module.ts
   ├─ site.component.ts            // component routing site itself
   ├─ site.cs.module.ts            // module providing Czech i18n requireoments (+ importing site module)
   ├─ site.en.module.ts            // module providing English i18n requireoments (+ importing site module)
   ├─ site.module.ts               // shared module imported to specific site modules
   └─ site-routing.module.ts       // site routing, this routes actual application

```

More details about the file purposes and code constructions are in the files itself. 
Setup guide with motivation and concept explanation is in the [blog post](https://medium.com/@vmasek/angular-typed-translations-29353f0a60bc).

# How to run

Visit Stackblitz for [online demo](https://stackblitz.com/github/vmasek/angular-typed-translations-demo)

or

- Clone the repo
- Install dependencies `npm i`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`
