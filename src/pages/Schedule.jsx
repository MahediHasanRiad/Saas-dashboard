import CalenderSide from '../component/UI/Schedule/calender-side'
import Header from '../component/UI/Schedule/header'

function Schedule() {
  return (
    <section className='w-5/6 p-6 bg-gray-100'>
      <Header />
      <section>
        <CalenderSide />
      </section>
    </section>
  )
}

export default Schedule
