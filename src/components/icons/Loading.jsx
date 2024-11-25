import PropTypes from 'prop-types';
import { AiOutlineLoading } from "react-icons/ai";

export default function Loading({className}) {
   return (
      <span className={className}>
         <AiOutlineLoading className='size-5 animate-spin mx-auto' />
      </span>
   );
}

Loading.propTypes = {
   className: PropTypes.string
}
