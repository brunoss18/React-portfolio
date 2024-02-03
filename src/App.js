import './style.css'

// import Cards from './cards.js'


function App() {
  return (
    <div className="container">

     <nav className='navbar'>
      <span className='nameLogo'>Name Name</span>
        <ol>
          <li>
            About Me
            </li>
            <li>
            Projects
            </li>
            <li>
           Hire me
            </li>
        </ol>
     </nav>

     <main className='main'>
        <div className='conteiner'>
          <div className='previousText'>
            <p className='whois'>
           #Who is Bruno?
            </p>
         
            <p>
             
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised
            </p>
            
          </div>
          <div className='buttons'>
              <button>Linkedin</button>
              <button>Github</button>
              <button>Learn more</button>
            </div>
        </div>
        
     </main>

     <section className="sectionAbout">

     {/* <Cards/> */}

    <div>

</div>
     </section>

    </div>
  );
}

export default App;
