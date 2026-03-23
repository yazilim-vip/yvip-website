/* ============================================================
   Yazilim VIP - Main JavaScript
   Handles: navigation, scroll effects, mobile menu, animations
   ============================================================ */

(function () {
  'use strict';

  // ----- DOM refs -----
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');
  const backToTop = document.querySelector('.back-to-top');
  const fadeEls = document.querySelectorAll('.fade-in');

  // ----- Header scroll effect -----
  function onScroll() {
    const scrollY = window.scrollY;

    // Header background
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link based on scroll position
    updateActiveNav();

    // Fade-in animations
    revealElements();
  }

  // ----- Active nav link -----
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 120;

    let currentId = '';
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  // ----- Intersection-based fade-in -----
  function revealElements() {
    fadeEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }

  // ----- Mobile menu -----
  navToggle.addEventListener('click', function () {
    navList.classList.toggle('open');
    var isOpen = navList.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.header')) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // ----- Event listeners -----
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', function () {
    onScroll();
    revealElements();
  });
})();
