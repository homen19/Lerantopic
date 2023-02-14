import React from 'react'
import './Welcome.css';
export const Welcome = () => {
  return (
   <>
     <div class="body">
    <header>
      <h1>Learn Topics</h1>
      <h2></h2>
    </header>
    <nav>
      <ul>
        <li><a href="#about">Java</a></li>
        <li><a href="#services">Data Structure</a></li>
        <li><a href="#contact">Computer network</a></li>
      </ul>
    </nav>
    <main>
      <section id="about">
        <h2>About Us</h2>
        <p>We are pro</p>
      </section>
      <section id="services">
        <h2>Topic</h2>
        <ul>
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Data</li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"/>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"/>
          <label for="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </section>
    </main>
    <footer>
      <p>@Sur Nokore Jen Dhonnobad</p>
    </footer>
  </div>
    </>
  )
}
