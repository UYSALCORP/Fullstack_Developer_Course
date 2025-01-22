import React from 'react'

const SpacingAndSizing = () => {
  return (
    <div>
      <h3 className="text-2xl">Spacing And Sizing</h3>
      <div>
        <button className="bg-blue-900 text-yellow-400 p-4 m-1">Tıkla</button>
        <button className="bg-blue-900 text-yellow-400 px-4 ">Tıkla</button>
        <button className="bg-blue-900 text-yellow-400 mx-1">Tıkla</button>
      </div>
      <div>
        <button className="bg-green-500 mx-4 px-4 py-2 border-[3px] border-black rounded-md">Gönder</button>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  )
}

export default SpacingAndSizing
