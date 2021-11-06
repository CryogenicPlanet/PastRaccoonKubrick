# Description for V1

Briefly description of architectural decisions I made and why I made them

## Frontend

Just a single page `index.html` and a single js file `index.js` that handles the entire frontend

The adding review is handled within the main view itself, and the reviews update automatically without page reloads

An choice I made was to make template components, hide them at the bottom of the dom and then clone them to programmatically create the UI, this was mostly done for convenience and easier styling.

The template components are at the bottom of the page
```html
 <!-- Star template -->
  <svg id="starTemplate" style="display: none" class="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path
      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>

  <!-- Review template -->
  <div id="reviewTemplate" style="display: none" class="flex items-center w-full space-x-4">
    <div id="starContainer" class="flex items-center"></div>
    <div id="textContainer" class="flex items-center text-md"></div>
  </div>
```


A fairly important decision here was to use Tailwindcss, this is mainly because I really enjoy working with tailwind, it makes css barrable for me and allows me to create UI really fast. That said I was a bit reluctant to use it here as I was not sure if it was allowed. Also took a template from my personal subscription to https://tailwindui.com/ this is again to help prototyping speed and cause their designs look really good



## Backend

For the backend I made a simple express server in node using typescript and prisma

I used typescript because I always use typescript and it makes working especially as the codebase grows much more pleasant

I used prisma as it provides a really nice abstraction over postgres to make database calls and has a really clean syntax. Another reason I chose prisma is for v2, I am going to add graphql to had realtime updates and prisma works really nicely with graphql


## Things I would've done differently

I would/should have definitely added something like `alpine.js` as a minimal abstraction over vanilla js that would have made making the UI much easier

In a similar vain I should've used typescript for the frontend code, and bundled it with esbuild like I did for the backend code. I was considering this but felt it might've been a little over kill, but it would've definitely helped