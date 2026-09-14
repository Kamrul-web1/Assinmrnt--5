

import { Suspense } from 'react';
import './App.css'
import About from './components/About'
import Api from './components/Api';
import Nav from './components/Nav'
import type { Iexplore } from './types/types';
import Footer from './Footer';


const ExploretheTechnologie = async (): Promise<Iexplore[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json()
  return data

}
const Explorepromis = ExploretheTechnologie();




function App() {


  return (
    <>
      <Nav />

      <About />
      <Suspense fallback={<h2>Loding....</h2>}>
        <Api Explorepromis={Explorepromis} />
      </Suspense>
      <Footer />
    </>

  )
}

export default App
