import React from 'react'

const POPpage = async ({ params }) => {
    const res = await fetch(`http://localhost:1920/users/${params.id}`,)
    const post = await res.json()
  return (
    <div>POPpage {post.name}</div>
  )
}

export default POPpage
