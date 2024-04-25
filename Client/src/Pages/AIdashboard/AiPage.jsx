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
        <section className={styles.aipage}>
        <div className={styles.greeting}>
            {/* <h1>Dashboard</h1> */}
            {!!user && (<h2 className={styles.username}>Hi {user.name}!</h2>)}
        </div>

        <div className={styles.result}>
						{/* <div className={styles.resulttitle}>
							<p>{recentPrompt}</p>
						</div> */}

						<div className={styles.resultdata}>
            <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
						</div>

				</div>

          
					<div className={styles.searchbox}>
						<input
							onChange={(e) => {
								setInput(`${e.target.value}`);
							}}
							value={input}
							type="text"
							placeholder="Enter the Text you want to summarize"
						  className={styles.inputarea} />

						<div>
							<button
								onClick={() => {
									onSent(input+preExistingPrompt);
								}}  className={styles.pushable} >
                        <span class={styles.shadow}></span>
                  <span class={styles.edge}></span>
                  <span class={styles.front}>
                  Submit
                  </span></button>
						</div>
					</div>
	

        </section>
    )
}
export default AiPage;