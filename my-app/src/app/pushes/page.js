import Link from 'next/link';
import React from 'react'

export default async function pushesPage() {

  const res = await fetch('http://localhost:1920/users', {
    cache: "no-store"
  })
  const post = await res.json()
  console.log(post);

  return (

    <div className='grid grid-cols-3 md:grid-cols-2 gap-1 mx-auto'>
      {post.map((ev) => (
        <div className="card bg-base-100 w-96 shadow-xl border-solid border-2 border-sky-500 mx-auto">
          <div className="card-body">
            <h2 className="card-title">{ev.name} </h2>
            <p>{ev.email}</p>
            <p>{ev.description.slice(0, 50)}</p>
            <div className="card-actions justify-end">
              <Link href={`/pushes/${ev.id}`}>
                <button className="btn btn-primary btn-outline">More Info</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
