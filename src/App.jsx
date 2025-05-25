import { useState } from 'react'
import './App.css'

function App () {
  const [area, setArea] = useState('')
  const [height, setHeight] = useState('')
  const [smokers, setSmokers] = useState('')
  const [cigaretteType, setCigaretteType] = useState('rokokBiasa')
  const [result, setResult] = useState()

  function handleClick (event) {
    event.preventDefault()
    const areaNum = parseFloat(area)
    const heightNum = parseFloat(height)
    const smokersNum = parseInt(smokers)

    if (isNaN(smokersNum) || smokersNum <= 0) {
      alert('Please enter a valid number of smokers.')
      return
    }
    if (isNaN(areaNum) || isNaN(heightNum) || areaNum <= 0 || heightNum <= 0) {
      alert('Please enter valid positive numbers for room dimensions.')
      return
    }

    let smokeDensity
    if (cigaretteType === 'rokokBiasa') {
      smokeDensity = 525
    } else if (cigaretteType === 'cigar') {
      smokeDensity = 1800
    } else {
      alert('Please select a valid cigarette type.')
      return
    }

    const volume = areaNum * heightNum
    const smokeAmount = (smokeDensity * smokersNum ** 2) / volume
    if (isNaN(smokeAmount) || smokeAmount <= 0) {
      alert('Calculation error. Please check your inputs.')
      return
    }

    setResult(smokeAmount.toFixed(2))
  }

  return (
    <>
      <div className='bg-red-500 min-w-full h-screen fixed top-0 left-0 m-0 p-0 min-h-screen w-full flex items-center justify-center'>
        <div className='max-w-md mx-auto bg-white p-8 min-w-xl rounded-xl shadow-md'>
          <div className='block'>
            <h1 className='text-2xl font-bold  text-center mb-8'>
              {result ? `Result: ${result} CFM` : 'Honeywell CFM Calculator'}
            </h1>
          </div>
          <form onSubmit={handleClick} className='space-y-6'>
            <div>
              <label className='block mb-1 font-medium'>Room area (m²):</label>
              <input
                type='text'
                placeholder='e.g. 30'
                value={area}
                onChange={e => setArea(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Room height (m):</label>
              <input
                type='text'
                placeholder='e.g. 2.5'
                value={height}
                onChange={e => setHeight(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div>
              <label className='block mb-1 font-medium'>
                Number of smokers:
              </label>
              <input
                type='text'
                placeholder='e.g. 2'
                value={smokers}
                onChange={e => setSmokers(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Cigarette type:</label>
              <select
                name='cigarette'
                id='cigarette'
                value={cigaretteType}
                onChange={e => setCigaretteType(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              >
                <option value='rokokBiasa'>Rokok biasa</option>
                <option value='cigar'>Cigar</option>
              </select>
            </div>
            <button
              type='submit'
              className='w-full !bg-red-500 text-white uppercase h-16 mt-5 font-extrabold !text-2xl py-2 rounded hover:!bg-red-400 transition'
            >
              Submit
            </button>
            <button
              type='button'
              onClick={() => {
                setArea('')
                setHeight('')
                setSmokers('')
                setCigaretteType('rokokBiasa')
                setResult(undefined)
              }}
              className='w-full !bg-gray-300 text-gray-800 uppercase h-16  font-extrabold !text-2xl py-2 rounded hover:bg-gray-400 transition'
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
