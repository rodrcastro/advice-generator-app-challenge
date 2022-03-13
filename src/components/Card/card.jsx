import { useEffect, useState } from 'react';

function Card() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      setAdvice(data)
    })
  }, [])
  
  
  return (
    <>
      <div className="flex flex-col items-center bg-darkgray-blue rounded max-w-max p-20 m-auto">
      {Object.keys(advice).map((data, i) => 
        (
          <div className="flex flex-col">
            <header className="text-green">Advice #{advice[data].id}</header>

            <p className="text-cyan">"{advice[data].advice}"</p>
          </div>
        ))}

        <div className="flex flex-col items-center">
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

          <button className="bg-green rounded-full p-4">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
          </button>
        </div>
      </div>

   </>  
  )
}

export default Card;