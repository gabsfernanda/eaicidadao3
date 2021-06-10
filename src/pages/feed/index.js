import React from 'react'

import Container from '../../components/container'
import Footer from '../../components/footer'
import Header from '../../components/header'

import { makeStyles } from '@material-ui/core/styles'
import Postcard from './postcard'

// const Feed = () => <h1>Feed</h1>

const useStyles = makeStyles((theme) => ({
    root: {
  
    }
  }));

  const posts = [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Fulano',
        username: 'fulano',
        avatar: '/src/pages/feed/images/avatar1.png'
      },
      title: "Buraco",
      date: "05 de julho de 2021",
      description: 'Buraco em algum lugar',
      image: "/src/pages/feed/images/post1.jpg"
    },
    {
      id: 2,
      author: {
        id: 2,
        name: 'Ciclano',
        username: 'ciclano',
        avatar: '/src/pages/feed/images/avatar2.png'
      },
      title: "Enchente",
      date: "06 de julho de 2021",
      description: 'Enchente em algum lugar',
      image: "/src/pages/feed/images/post2.jpg"
    },
    {
      id: 3,
      author: {
        id: 3,
        name: 'Beltrano',
        username: 'ciclano',
        avatar: '/src/pages/feed/images/avatar2.png'
      },
      title: "Enchente",
      date: "06 de julho de 2021",
      description: 'Enchente em algum lugar',
      image: "/src/pages/feed/images/post2.jpg"
    }
  ];
const Feed = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Header />
            <Container>
                {posts.map(post => (
                    <Postcard key={post.id} post={post} />
                ))}
            </Container>
            <Footer />
        </div>
    )
}

export default Feed;