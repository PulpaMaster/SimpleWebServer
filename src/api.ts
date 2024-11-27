import { type Express, type Request, type Response } from 'express'

export const initializeAPI = (app: Express) => {
  const port = 3000

    app.get('/hello-world', (req: Request, res: Response) => {
        res.send('Hello World!')
      })
       
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
       
      let posts = [
        {id : 1, content: 'I feel like Iam a post'},
        {id : 2, costent: 'Today is a good day'},
        {id : 3, content: 'I have a lot of posts'},
        {id : 4, content: 'My posts are the best'}
      ]
       
      //GET-function for all posts
      app.get('/posts', (reg: Request, res: Response) => {
        res.send(posts)
      })
       
      //POST-function to add new ID + post comment via postman
      app.post('/posts', (req: Request, res: Response) => {
          const newPost = req.body;
          newPost.id = posts[posts.length - 1].id + 1;
          posts.push(newPost);
          res.send(newPost);
      });
       
      /*//POST-function to add new ID + post comment via postman with the right order
      app.post('/posts', (req: Request, res: Response) => {
        const newPost = {
            id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1, // Automatische ID
            content: req.body.content // Inhalt aus dem Request-Body übernehmen
        };
        posts.push(newPost); // Füge den neuen Post hinzu
        res.send(newPost); // Sende den neuen Post als Antwort
      });*/
       
      // PUT-Function to update an existing content
      app.post('/posts', (req: Request, res: Response) => {
        const newPost = {
            id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1, // Automatische ID
            content: req.body.content // Inhalt aus dem Request-Body übernehmen
        };
        posts.push(newPost); // Füge den neuen Post hinzu
        res.send(newPost); // Sende den neuen Post als Antwort
      });
      
      app.post('/posts/:id', (req: Request, res: Response) => {
        
      });
      
      app.put('/posts/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        const updatedPost = req.body
        const existingPost = posts.find((post) => post.id === id)
        if (!existingPost) {
        res.status(404).send('Post not found')
        return
        }
        updatedPost.id = id
        posts = posts.map((post) => (post.id === id ? updatedPost : post))
        res.send(updatedPost)
        })
      
      app.delete('/posts/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        posts = posts.filter((post) => post.id !== id)
        res.send(posts)
      })
}