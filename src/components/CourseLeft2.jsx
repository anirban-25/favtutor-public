import React from 'react'
import Component1Header from './Component1Header'
import TryItYourself from './TryItYourself'
import Component1Footer from './Component1Footer'

const CourseLeft2 = () => {
  return (
    <div className="w-full overflow-x-hidden h-screen bg-white">
      <Component1Header />
      <div className="w-full border-gray-300 border-4"></div>
      <div className="p-4">
        <TryItYourself />
      </div>
      <div className="w-full border-gray-300 border-4"></div>
      <div>
        <Component1Footer />
      </div>
    </div>
  )
}

export default CourseLeft2