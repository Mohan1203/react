import React,{useState} from 'react'

function Addtodo(props) {
    let[title,setTitle]=useState('');
    let[desc,setDesc]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("This value can't be blank");
        }else{
        props.addtodo(title,desc);
        setTitle('');
        setDesc('')
        }
    }

  return (
   <div className='w-screen '>
    <div className=''>
        <form onSubmit={submit} className='text-center'>
            <label htmlFor="Title" className='text-[1.5rem] ' >Title</label><br />
            <input className='border-2 w-1/2 h-12  ' type="text" name="Title" id="Title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
            <label htmlFor="Desc" className='text-[1.5rem]'>Desc</label><br />
            <textarea name="Desc" id="" cols="90" rows="4" className='border-2 'placeholder='Description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea><br /> 
            <button className='bg-green-400 h-10 w-24 rounded-md m-5' >Submit</button>
        </form>
    </div>
    <hr />
   </div>
  )
}

export default Addtodo