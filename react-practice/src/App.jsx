// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
      <nav className='py-2 bg-light border-bottom'>
        <div className='container d-flex flex-wrap'>
          <ul className='nav me-auto'>
            <li className='nav-item'>
              <a href='/' className='nav-link link-dark px-2 active' aria-current='page'>Home</a>
            </li>
            <li className='nav-item'><a href='/' className='nav-link link-dark px-2'>Features</a></li>
            <li className='nav-item'><a href='/' className='nav-link link-dark px-2'>FAQs</a></li>
            <li className='nav-item'><a href='/' className='nav-link link-dark px-2'>About</a></li>
          </ul>
          <ul className='nav'>
            <li className='nav-item'><a href='/' className='nav-link link-dark px-2'>Login</a></li>
            <li className='nav-item'><a href='/' className='nav-link link-dark px-2'>Sign Up</a></li>
          </ul>
        </div>
      </nav>
      <header className='py-3 no-4 border-bottom'>
        <div className='container d-flex flex-wrap justify-content-center'>
          <a href='/' className='d-flex align-item-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none'>
          <span className='fs-4'>My First React App</span>
          </a>
          <form className='col-12 col-lg-auto mb-3 mb-lg-0'>
            <input type='search' className='form-control' placeholder='Search...' aria-label='Search' />
          </form>
        </div>
      </header>
    </>
  );
}

function Content () {
 return (
    <div className='p-5 mb-4 bg-light rounded-3 border'>
      <div className='container-fluid py-5'>
        <h1 className='display-5 fw-bold'>First Paragraph in Jumbotron</h1>
        <p className='col-md-8 fs-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, hic.
        </p>
        <button className='btn btn-primary btn-lg' type='button'>Example</button>
    </div>
    </div>
  );
}

// export default Header; 
export default Content;