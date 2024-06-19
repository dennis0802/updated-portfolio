import { Image } from 'react-bootstrap';

function ContactComponent({props}){
    return(
      <div className='mx-1 mt-1'>
        <a href={props.link}>
            <Image
                src={props.img}
                width={32}
                height={32}
                alt={props.alt}
                className="logoImg"
            />
        </a>
      </div>
    )
}

export default ContactComponent