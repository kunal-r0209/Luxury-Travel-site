import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className='formContainer'>
        <h1>Send a message to us!</h1>
        <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='E-mail' />
            <input type="password" placeholder='Password' />
            <textarea placeholder='Message'  rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}
