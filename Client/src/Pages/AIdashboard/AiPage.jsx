import styles from './AiPage.module.css';
import { UserContext } from '../../../context/UserContextProvider';
import {useContext} from 'react';
const AiPage=()=>{
    const {user}=useContext(UserContext)
    return(
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h2>Hi {user.name}!</h2>)}
            <input type="text" />
            <button type="submit">Submit Here</button>
        </div>
    )
}
export default AiPage;