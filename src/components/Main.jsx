
import TodoList from './TodoList'

const Main = (props) => {

    
  return (
    <div style={{ background:'#e8a30e',padding:'20px'}} className='container'>
        <h1>Hello Main</h1>
        <div style={{ background:'gray',padding:'100px'}} className='container'>
        <form onSubmit={(event)=>props.handleSubmit(event)}>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label"><b>Title</b></label>
    <input type="text" onChange={(event) => props.handleTitle(event)} className="form-control" id="" aria-describedby="" />
  </div>
  <div className="mb-3">
    <label htmlhtmlfor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" onChange={(event) => props.handleDescription(event)} className="form-control" id="" />
   
  </div>
  <button onClick={props.handleSave} type="submit" className="btn btn-primary">Save</button>
</form>

<TodoList newItems={props.todo}  />

        </div>
        </div>
  )
}

export default Main