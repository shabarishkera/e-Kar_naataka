import {useLocation} from 'react-router-dom';
import Videos from './Videos'
export default function Learn({router}) {
	var params=useLocation();
	
	return (<>


<Videos keyword={params.state.title+" tutorials"}/>

		</>)
}