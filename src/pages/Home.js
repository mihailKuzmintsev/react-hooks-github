import React, { Fragment, useContext } from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import { GithubContext } from '../context/github/githubContext'

export default function Home() {
    const { loading, users } = useContext(GithubContext)

    return (
        <Fragment>
            <Search></Search>

            {loading ? (
                <p className='text-center'>Загрузка ...</p>
            ) : (
                <div className='row'>
                    {users.map(user => (
                        <div key={user.id} className='col-sm-4 mb-4'>
                            <Card user={user}></Card>
                        </div>
                    ))}
                </div>
            )}
        </Fragment>
    )
}
