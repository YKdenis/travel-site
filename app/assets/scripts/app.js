import MobileMenu from './modules/mobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/stickyHeader';
import Modal from './modules/modal';

const mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", "85%");
new RevealOnScroll(".testimonial", "60%");
const stickyHeader = new StickyHeader(".large-hero__title");
const modal = new Modal();