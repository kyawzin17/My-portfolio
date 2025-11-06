import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Header from './mainComponents/Header';
import Profile from "./mainComponents/Profile";
import About from './mainComponents/About';
import Project from "./mainComponents/Project";
import Skills from "./mainComponents/Skills";
import Contact from "./mainComponents/Contact";
import Footer from "./mainComponents/Footer";

const array= [
  { id: "profile", component: Profile},
  { id: "about", component: About},
  { id: "project", component: Project},
  { id: "skills", component: Skills},
  { id: "contact", component: Contact},
  { id: "footer", component: Footer},
];
function App() {

   const sectionRef= useRef({});
   const [active, setActive]= useState("profile");
   useEffect(() => {
    const observer= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      }, 
      { threshold: 0.6,
        // rootMargin: "-80px 0px 0px 0px",
      }
    );
    array.forEach(({id}) => {
    if(sectionRef.current[id]) observer.observe(sectionRef.current[id]);
   });

   return () => observer.disconnect();
   }, []);

  return (
    <div className="app">
      <Header active={active} setActive={setActive}/>
      <div className="body">

            {array.map(({id, component: Component}) => {
              return <section ref={(el) => (sectionRef.current[id] =el)} id={id} key={id}><Component /></section>
            })}
        
        </div>
    </div>
  );
}
//ref={(el) => sectionRef.current[id] = el}
export default App;
