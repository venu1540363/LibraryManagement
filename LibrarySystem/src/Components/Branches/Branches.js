import './Branches'
import React from 'react'
import { Link } from 'react-router-dom'

function Branches() {
	return (
		<>
			<div className="buttons">
				<table className="table">
					<tr>
						<th>
							<Link to="/AddBooks"><button className="button_ece">ECE</button></Link>   
						</th>
						<th>
						<Link to="/AddBooks"><button className="button_cse">CSE</button></Link>
						</th>
						<th>
						 <Link to="/AddBooks"><button className="button_civil">CIVIL</button></Link>
						</th>
					</tr>
					<tr>
						<td>
							  <Link to="/AddBooks"><button className="button_mech">MECH</button></Link>
						</td>
						<td>
							 <Link to="/AddBooks"><button className="button_mme">MME</button></Link>
						</td>
						<td>
							 <Link to="/AddBooks"><button className="button_puc">PUC</button></Link>
						</td>
					</tr>
				</table>
			</div>
		</>
	)
}

export default Branches