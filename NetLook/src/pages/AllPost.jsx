import React, {useState, useEffect} from 'react'
import service from '../appwrite/config'
import { PostCard } from '../components'
import Container from '../components'

function AllPost() {

    const [posts, setposts] = useState([])
    useEffect(()=>{
        service.getPosts([]).then((posts)=>{
            if(posts){
                setposts(posts.documents)
            }
        })
    },[])

  return (
    <div className='py-8'>
        <Container>
            <div className='flex flex-wrap'>
            {posts && posts.map((post)=>(
                <div className='p-2 w-1/4'>
                <PostCard key={post.$id} post={post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost