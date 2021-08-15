import Loader from './components/Loader'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import KnowEvents from './components/KnowEvents'
import MostPopularEvents from './components/MostPopularEvents'
import Months from './components/Months'
import BookAppointment from './components/BookAppointment'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import RecentEvents from './components/RecentEvents'
import Footer from './components/Footer'
import Copyright from './components/Copyright'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Loader />
      <div className='as_main_wrapper'>
        <Header />
        <HeroSection />
        <KnowEvents />
        <MostPopularEvents />
        <Months />
        <BookAppointment />
        <Testimonials />
        <WhyUs />
        <RecentEvents />
        <Footer />
        <Copyright />
      </div>
    </div>
  )
}

export default App
