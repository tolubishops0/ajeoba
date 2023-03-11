import React from 'react';
import sort from '../Assets/sort.svg';
import filter from '../Assets/filter.svg';
import dot from '../Assets/dottt.svg';
import user from '../Assets/user.svg';
import { Toolbar } from '@mui/material';
import Pagination from './LightComp/Pagination';

const userData = [
	{
		issues: 'Contact Email not Linked',
		updates: 'Updated 1 day ago',
		name: 'Tom Cruise',
		date1: 'on 24.05.2019',
		date2: 'May 26, 2019',
		time: '6:30 PM',
		priority: 'high',
		avi: user,
		dot: dot,
	},
	{
		issues: 'Adding Images to Featured Posts',
		updates: 'Updated 2 day ago',
		name: 'Matt Damon',
		date1: 'on 26.08.2021',
		date2: 'Jan 26, 2019',
		time: '6:30 PM',
		priority: 'low',
		avi: user,
		dot: dot,
	},
	{
		issues: 'When will I be charged this month?',
		updates: 'Updated 4 day ago',
		name: 'Tom Cruise',
		date1: 'on 24.05.2019',
		date2: 'May 26, 2019',
		time: '6:30 PM',
		priority: 'normal',
		avi: user,
		dot: dot,
	},
	{
		issues: 'Payment not going through',
		updates: 'Updated 7 day ago',
		name: 'Tom Cruise',
		date1: 'on 14.09.2022',
		date2: 'April 26, 2016',
		time: '4:30 AM',
		priority: 'low',
		avi: user,
		dot: dot,
	},
	{
		issues: 'How do I change my password?',
		updates: 'Updated 19 day ago',
		name: 'Robert Downey',
		date1: 'on 19.02.2023',
		date2: 'Feb 26, 2019',
		time: '1:30 PM',
		priority: 'normal',
		avi: user,
		dot: dot,
	},
	{
		issues: 'Unable to add replies',
		updates: 'Updated 9 day ago',
		name: 'Tom Cruise',
		date1: 'on 24.05.2019',
		date2: 'May 26, 2019',
		time: '6:30 PM',
		priority: 'high',
		avi: user,
		dot: dot,
	},
	{
		issues: 'Downtime since last week',
		updates: 'Updated 8 day ago',
		name: 'Chris Evans',
		date1: 'on 18.10.2009',
		date2: 'Aug 22, 2011',
		time: '9:50 AM',
		priority: 'high',
		avi: user,
		dot: dot,
	},
	{
		issues: 'Referral Bonus',
		updates: 'Updated 1 day ago',
		name: 'Henry Cavil',
		date1: 'on 21.11.2018',
		date2: 'Oct 26, 2020',
		time: '6:30 PM',
		priority: 'low',
		avi: user,
		dot: dot,
	},
];
function Table() {
	return (
		<div>
			<Toolbar />
			<div className="py-8 px-6 bg-white border border-[#DFE0EB] rounded-xl">
				<div className="flex justify-between font-semibold">
					<h1 className="text-[#252733] ">All tickets</h1>
					<div className="grid grid-cols-2 gap-8 text-[#4B506D]">
						<span className="flex items-center gap-1">
							<img src={sort} alt="sort" />
							<p>Sort</p>
						</span>
						<span className="flex items-center gap-1">
							<img src={filter} alt="sort" />
							<p>Filter</p>
						</span>
					</div>
				</div>
				<div className="ml-4 flex items-center sm:ml-0 sm:justify-center mt-12">
					<table className="w-full">
						<thead className="text-left sr-only lg:not-sr-only">
							<tr className="text-[#9FA2B4]">
								<th scope="col">Ticket details</th>
								<th>Customer name</th>
								<th>Date</th>
								<th>Priority</th>
							</tr>
						</thead>
						{userData.map((item, index) => {
							return (
								<tbody key={index}>
									<tr className="border-t items-center ">
										<td className="py-9">
											<span className="flex items-center gap-4 ">
												<img
													src={item.avi}
													className="hidden md:block border-2 rounded-full"
													alt="avatar"
												/>
												<span>
													<h1 className=" td-class">{item.issues}</h1>
													<p className="suspended-text">{item.updates}</p>
												</span>
											</span>
										</td>
										<td>
											<span>
												<h1 className="td-class ">{item.name}</h1>
												<p className="suspended-text">{item.date1}</p>
											</span>
										</td>
										<td>
											<span>
												<h1 className="td-class">{item.date2}</h1>
												<p className="suspended-text">{item.time}</p>
											</span>
										</td>

										<td>
											<span className={item.priority}>{item.priority}</span>
										</td>
										<td className="dot-class">
											<img src={item.dot} alt="dot" />
										</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				</div>
				<Pagination />
			</div>
			<Toolbar />
		</div>
	);
}

export default Table;
