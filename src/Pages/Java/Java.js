import React from 'react'
import './Java.css';
import Data from "./JavaData";

export const Java = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className='my-2 '>Java Learning</h2>
            {/* -------------------Main description block------------- */}
            <div className="d-flex">
              <section className='Intro-java my-1'>
                <h4>What is Java</h4>
                <p className="text-justify">Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.

                  Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.

                  Platform: Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.</p>
                <h4>Java Example</h4>
                <p>Let's have a quick look at Java programming example. A detailed description of Hello Java example is available in next page.</p>
                <div className="ex1">

                </div>
              </section>
              <section className='controller-desc my-1'>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h4 className='text-center fw-bold my-2'>Topics</h4>

                       { Data.map(d =>(
                        <div className="topic" key={d.id}>
                            <p>{ d.topic }</p>
                            
                        </div>
                        ))}
                        
                      </div>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
