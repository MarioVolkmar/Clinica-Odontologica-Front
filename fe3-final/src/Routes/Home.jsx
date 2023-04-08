import React, { useEffect, useState } from 'react'
import styles from '../css/Home.css'
import Card from '../Components/Card.jsx'
import { useFetchUser } from '../Hooks/useFetchUsers'

const Home = () => {
    const url='https://jsonplaceholder.typicode.com/users'
    const data = useFetchUser(url)
    
return (
    <main>
        <h1>Home</h1>
        <div className='grid'>
            {data ? (
                data.map((user) => (
                    <Card key={user.id} user={user}  />
                ))
            ) : (
                <></>
            )}
        </div>
    </main>
    )
}

export default Home


