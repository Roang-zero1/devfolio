"use strict";(self.webpackChunkdevfolio=self.webpackChunkdevfolio||[]).push([[230],{2821:function(e,t,n){var a=n(7294);const l="block pt-12 md:flex",r="pb-6 md:w-full md:max-w-150 md:p-0",i="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",s="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.Z=e=>{let{title:t,children:n}=e;return a.createElement("div",{className:l},a.createElement("div",{className:r},a.createElement("h2",{className:i},t)),a.createElement("div",{className:s},n))}},7547:function(e,t,n){var a=n(4854),l=n(7294);const r="mb-6",i="font-semibold text-gray-900 pb-1",s="text-md text-gray-600 font-light";t.Z=e=>{let t,{name:n,description:c,link:m=!1,internal:o=!1}=e;return t=o?l.createElement(a.Link,{to:m},n):l.createElement("a",{href:m},n),l.createElement("div",{className:r},l.createElement("h3",{className:i+" "+(m?"hover:underline hover:text-black":"")},m?t:n),l.createElement("p",{className:s},c))}},3483:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(7361),l=n.n(a),r=n(7294),i=n(5189),s=n(1988),c=n(2821);var m=e=>{let{about:t}=e;return r.createElement(c.Z,{title:"About Me"},r.createElement("div",{className:"mb-6"},r.createElement("p",null,t)))},o=n(4854),d=n(7547);var p=e=>{let{posts:t}=e;return r.createElement(c.Z,{title:"Latest Posts"},t.map((e=>r.createElement(d.Z,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0}))),t.length>=5&&r.createElement(o.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))};var u=e=>{let{experience:t}=e;return t.length?r.createElement(c.Z,{title:"Experience"},t.map((e=>r.createElement(d.Z,{key:e.name,name:e.name,description:e.description,link:e.link})))):null};var E=e=>{let{projects:t}=e;return t.length?r.createElement(c.Z,{title:"Projects"},t.map((e=>r.createElement(d.Z,{key:e.name,name:e.name,description:e.description,link:e.link})))):null};var k=e=>{let{skills:t}=e;return r.createElement(c.Z,{title:"Skills"},t.map((e=>r.createElement(d.Z,{key:e.name,name:e.name,description:e.description}))))},f=n(4839);var g=e=>{let{data:t}=e;const n=l()(t,"site.siteMetadata.about",!1),a=l()(t,"site.siteMetadata.projects",!1),c=t.allMarkdownRemark.edges,o=l()(t,"site.siteMetadata.experience",!1),d=l()(t,"site.siteMetadata.skills",!1),g=!c||!c.length;return r.createElement(s.Z,null,r.createElement(f.Z,null),r.createElement(i.Z,{metadata:t.site.siteMetadata,noBlog:g}),n&&r.createElement(m,{about:n}),a&&a.length&&r.createElement(E,{projects:a}),!g&&r.createElement(p,{posts:c}),o&&o.length&&r.createElement(u,{experience:o}),d&&d.length&&r.createElement(k,{skills:d}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-89f1a67cee4cd4e28dc1.js.map