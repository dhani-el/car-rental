# FAST QUICK AND MINIMAL CAR RENTAL WEB APP

This is quite a minimal car rental web app in that it dosen't fully implement a user system, authentication and is currently missing the ability to create new cars for rent hence why a couple of links display coming soon (it is coming soon)

## Table of contents

- [FAST QUICK AND MINIMAL CAR RENTAL WEB APP](#fast-quick-and-minimal-car-rental-web-app)
  - [Table of contents](#table-of-contents)
  - [Summary](#summary)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Summary
This is a project built in order to work with and learn more about certain technologies it was not meant to be a full on functional deployable and possibly usable web app by a business (however i just might do so) it is a car rental app populated with dummy state and data so to speak however by tweaking certain actions can be populated with data from an api

### Links

- Github repo URL:(https://github.com/dhani-el/car-rental);
- Live Site URL 1: (https://lunder.netlify.com);
- - Live Site URL 2: (https://lunder.vercel.com);

### Built with

- Semantic HTML5 markup
- Scss
- React three fiber
- Redux Toolkit
- Mobile-first workflow
- React
- TypeScript
- Material Ui
- Framer Motion
- Tanstack Query(React Query)

### What I learned

I was able to learn how to use the redux toolkit with typescript as it requires some extra lines of code to set up (useAppDispatch , useAppSelector) unlike with vanilla javascript.
I was able to figure out a way to hold off on letting a user view a screen with a 3d model still loading.
I was also able to realize the implication of the difference between a 3d model being done downloading and the model being ready to be painted to the browser and how to account for that delay to create a more seamless user experience.

```html
<h1>A Component I'm proud of</h1>
```
```js
function NavBar():JSX.Element{
    const location = useLocation().pathname;
    const unfiltered = [{link:"/",title:"HOME"}, {link:"/shop",title:"SHOP"}, {link:"/rent",title:"RENT"}, {link:"/dealers",title:"DEALERS"},]
    const refined = unfiltered.filter(function(data){ return data.link !== location});

    return <div id="navBar" >
        {refined.map(function(info){return <Link to={info.link}  className="navLinks" > {info.title}</Link> })}
    </div>
}
```

### Continued development

I intend to attach an backend to this project with authentication , a user dashboard and implementation of the coming soon pages

### Useful resources

- [sketchfab.com](https://www.sketchfab.com) - Without this website and all the amazing and creative 3d artsit I wouldnt have been able to work with threejs as I did.

## Author

- Website - [OMOTAYO DANIEL UKUHOR](https://www.coderosion.netlify.com);
- Twitter - [@coderosion](https://www.twitter.com/coderosion);
- Linkedin - [daniel ukuhor](https://www.linkedin.com/daniel-coderosion);

## Acknowledgments

Thanks to All the OPEN SOURCE DEVS out there letting me use their code for free and sharing their knowledge and writing docs 
I really do APPRECIATE what you devs do

