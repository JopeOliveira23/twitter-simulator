import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import './styles.css';
import 'primeicons/primeicons.css';

function Home() {

  //  Logo  https://pbs.twimg.com/profile_images/1522005855939485699/hn_l-crI_400x400.jpg
  //  Foto  https://i1.sndcdn.com/avatars-6WiFZyYLhwBUJgpQ-GdBXzQ-t200x200.jpg
  
  //! useState sempre precisa ser tipado com  " <StateProperties[]> "  no TypeScript

  const [studentName, setStudentName] = useState<string>('');
  const [student, setStudent] = useState<object[]>([]);

  function handleAddsStudent(){
    const newStudent = {
      post: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    //! adiciona um novo card sem remover o anterior 

    setStudent(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    console.log("useEffect ok");
  }, [student]);

  return (
    <div className='container'>
      
      <header>
        <h1>Treinamento</h1>
        <div>
          <strong>Jopeskt</strong>
          <img src="https://pbs.twimg.com/profile_images/1522005855939485699/hn_l-crI_400x400.jpg" alt="Foto de Perfil" />
        </div>
      </header>

      <input type="text" placeholder="No que você esta pensando?"
             maxLength={200}
             onChange={e => setStudentName(e.target.value)} required/>

      <button className='adcBtn' type="button" onClick={handleAddsStudent}>
        <i className="pi pi-plus-circle"></i>Publicar
      </button>

      //! adiciona novo card com keyprop 

      {
      student.slice().reverse().map((student: any) => (
        <Card 
          key= {student.time}
          post= {student.post} 
          time={student.time} 
        />
      ))
      }

    </div>
  )
}

export default Home;