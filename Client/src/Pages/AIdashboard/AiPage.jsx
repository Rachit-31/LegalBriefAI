import styles from './AiPage.module.css';
import { UserContext } from '../../../context/UserContextProvider';
import {useContext , useState} from 'react';
import { Context } from "../../../context/Context";



const AiPage=()=>{
  const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

  const preExistingPrompt = 'Generate a summary in 4 lines';

    const {user}=useContext(UserContext);

    return(
        <section>
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h2>Hi {user.name}!</h2>)}
        </div>

        <div className="result">
						<div className="result-title">
							
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
						
            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

						</div>
					</div>

          
        <div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(`${e.target.value} ${preExistingPrompt}`);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<button

								onClick={() => {
									onSent();
								}}
							>Submit</button>
						</div>
					</div>
				</div>

        </section>
    )
}
export default AiPage;