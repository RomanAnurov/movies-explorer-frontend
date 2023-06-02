import './Preloader.css';

function Preloader(props) {
  const {text} = props;
    return (
        <div className='preloader'>
            {text ? 
                <p className="preloader__text">{text}</p>
                : <div className="preloader__load"></div>
            }
        </div>
    );
}

export default Preloader;