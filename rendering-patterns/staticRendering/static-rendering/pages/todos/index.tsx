export default function Todos({ todos }: { todos: any[] }){
  return (
    <div>
      {todos.map(( todo ) => <div>{todo.title}</div>)}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos = await res.json()
    return {
      props: {
        todos
      }
  }
}