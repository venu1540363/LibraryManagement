import React from "react";
import './SearchBooks';

function SearchBooks() {
	return (
		<>
			<body class="hm-gradient">
			<div class="card mb-4">
				<div class="card-body">
					<div class="row">
						<div class="col-md-12">
							<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Search within table</h2>
							<div class="input-group md-form form-sm form-2 pl-0">
								<input class="form-control my-0 py-1 pl-3 purple-border" type="text" placeholder="Search something here..." aria-label="Search" />
								<span class="input-group-addon waves-effect purple lighten-2" id="basic-addon1"><a><i class="fa fa-search white-text" aria-hidden="true"></i></a></span>
							</div>
							<h2 class="py-3 text-center font-bold font-up blue-text">Table with pagination</h2>
						</div>
					</div>
					<table class="table table-hover table-responsive mb-0">
						<thead>
							<tr>
								<th scope="row">#</th>
								<th class="th-lg"><a>First Name</a></th>
								<th class="th-lg"><a href="">Last Name</a></th>
								<th class="th-lg"><a href="">Username</a></th>
								<th class="th-lg"><a href="">Username</a></th>
								<th class="th-lg"><a href="">Username</a></th>
								<th class="th-lg"><a href="">Username</a></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>Paul</td>
								<td>Topolski</td>
								<td>@P_Topolski</td>
								<td>Paul</td>
								<td>Topolski</td>
								<td>@P_Topolski</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
								<td>Larry</td>
								<td>the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
					<div class="d-flex justify-content-center">
						<nav class="my-4 pt-2">
							<ul class="pagination pagination-circle pg-blue mb-0">
								<li class="page-item disabled clearfix d-none d-md-block"><a class="page-link">First</a></li>
								<li class="page-item disabled">
									<a class="page-link" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
										<span class="sr-only">Previous</span>
									</a>
								</li>
								<li class="page-item active"><a class="page-link">1</a></li>
								<li class="page-item"><a class="page-link">2</a></li>
								<li class="page-item"><a class="page-link">3</a></li>
								<li class="page-item"><a class="page-link">4</a></li>
								<li class="page-item"><a class="page-link">5</a></li>
								<li class="page-item">
									<a class="page-link" aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
										<span class="sr-only">Next</span>
									</a>
								</li>
								<li class="page-item clearfix d-none d-md-block"><a class="page-link">Last</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			</body>

				</>
				)
}
				export default SearchBooks