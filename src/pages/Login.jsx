export default function Login() {
  function sendForm(e) {
    e.preventDefault()
    let form = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    console.log(form)
  }
  return (
    <>
      <img src="images/thailand.jpg" className="img-fluid" alt="..." />
      <div className="" />
      <div
        className="card position-absolute top-50 start-50 translate-middle"
        style={{ width: '18rem' }}
      >
        <img src="images/logo-airbnb.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <form onSubmit={(e) => sendForm(e)}>
            <label>Email</label>
            <input name="email" type="text" />
            <label>Password</label>
            <input name="password" type="password" />
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}
