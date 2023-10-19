import Hero from './Hero';
import About from './About';
import Header from "./Header";
import {item} from "@/app/Interfaces";

const navItem: item[] = [
  {
    id: 1,
    title: 'About Me',
    url: '/about',
    alt: 'Whole Introduction of myself.',
  },
  {
    id: 2,
    title: 'Tech stack',
    url: '/tech',
    alt: 'Programs, hardwares, etc.'
  },
  {
    id: 3,
    title: 'Blogs',
    url: '/blogs',
    alt: 'Something I want to talk about, etc.',
  },
  {
    id: 4,
    title: 'Projects',
    url: '/projects',
    alt: 'What did I do?',
  }
];


export default function Home() {
  return (
    <main>
      <Header navItem={navItem} />
      <Hero />
      <About />
    </main>
  )
}
