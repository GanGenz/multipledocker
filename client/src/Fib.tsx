import axios from 'axios';
import { useEffect, useState } from 'react';

const Fib = () => {
  // const state = {
  //   seenIndexes: [],
  //   values: {},
  //   index: ''
  // }
  const [seenIndexes, setSeenIndexes] = useState([])
  const [values, setValues] = useState([])
  const [index, setIndex] = useState('')

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current')

    console.log('values is', values)
    setValues(values.data)
  }
  const fetchIndexes = async () => {
    const sIndexs = await axios.get('/api/values/all')

    // console.log('data', sIndexs.data)
    setSeenIndexes(sIndexs.data) 
  }
  const renderSeenIndexes = () => {
    return seenIndexes.map((number) => number).join(', ')
  }
  const renderValues = () => {
    return  values.length > 0 && values.map((item: any, index: number) => {
      return (
        <div key={index}>For index {index} I calculated {item}</div>
      )
    })
  }

  useEffect(() => {
    fetchValues()
    fetchIndexes()

  },[])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // console.log('abcd');
    await axios.post('/api/values', {
      index: index
    })
    setIndex('')


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter your index:</label>
        <input type="text" 
          value={index} 
          onChange={(e) => setIndex(e.target.value)}
         />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}
      <h3>Calculated Values:</h3>
      {renderValues()}
    </div>
  )
}

export default Fib