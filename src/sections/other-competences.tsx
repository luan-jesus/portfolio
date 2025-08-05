import React, { useEffect } from 'react'
import './scroller.css'

export default function OtherCompetences() {

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", 'true');

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner?.children || []);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerInner?.appendChild(duplicatedItem);
        });
      });
    }

  }, [])

  return (
    <section>
      <h2>Demais Competências</h2>
      <div className="scroller" data-speed="slow">
        <ul className="tag-list scroller__inner">
          <li>GIT</li>
          <li>ELK Stack</li>
          <li>Node.js & Express</li>
          <li>Linux</li>
          <li>Princípios SOLID</li>
          <li>React</li>
          <li>React Native</li>
          <li>Angular</li>
          <li>Cloud AWS</li>
          <li>Express</li>
          <li>API REST</li>
        </ul>
      </div>
    </section>
  )
}
