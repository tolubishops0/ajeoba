import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import inputcheck from '../Assets/inputcheck.png';
import Button from '@mui/material/Button';
import Tooltp from '@mui/material/Tooltip';

import {
	AreaChart,
	Legend,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { Toolbar } from '@mui/material';

const data = [
	{ x: 10, Yesterday: 100, Today: 20 },
	{ x: 12, Yesterday: 30, Today: 120 },
	{ x: 14, Yesterday: 120, Today: 20 },
	{ x: 16, Yesterday: 70, Today: 150 },
	{ x: 18, Yesterday: 45, Today: 40 },
	{ x: 20, Yesterday: 110, Today: 136 },
	{ x: 22, Yesterday: 0, Today: 61 },
	{ x: 24, Yesterday: 100, Today: 145 },
	{ x: 26, Yesterday: null, Today: null },
];

const CustomToolTip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div>
				<Tooltp
					arrow
					sx={{ bgcolor: 'white', border: 'white', color: '#252733' }}>
					<Button>{`${payload[0].value}, ${payload[1].value}`}</Button>
				</Tooltp>
			</div>
		);
	}
	return null;
};

const CustomTick = ({ x, y, payload }) => (
	<g transform={`translate(${x}, ${y})`}>
		<text x={0} y={0} dy={-8} textAnchor="end" fill="#9FA2B4">
			{payload.value}
		</text>
	</g>
);

const services = [
	{
		title: 'Resolved',
		val: '449',
	},
	{
		title: 'Recieved',
		val: '426',
	},
	{
		title: 'Average first response time',
		val: '33min',
	},
	{
		title: 'Average response time',
		val: '3h 8m',
	},
	{
		title: 'Resolution within SLA',
		val: '94%',
	},
];

const tickets = [
	{
		title: 'Waiting on Feature Request',
		val: '4238',
	},
	{
		title: 'Awaiting Customer Response',
		val: '1005',
	},
	{
		title: 'Awaiting Developer Fix',
		val: '914',
	},
	{
		title: 'Pending',
		val: '281',
	},
];

const Tasks = [
	{
		title: 'Create new task',
		val: '+',
		color: '#F0F1F7',
	},
	{
		title: 'Finish ticket update',
		val: 'URGENT',
		color: '#FEC400',
	},
	{
		title: 'Create new ticket example',
		val: 'NEW',
		color: '#29CC97',
	},
	{
		title: 'Update ticket report',
		val: 'DEFAULT',
		color: '#F0F1F7',
	},
];

const cardContents = [
	{
		title: 'Unresolved',
		amt: '60',
	},
	{
		title: 'Overdue',
		amt: '16',
	},
	{
		title: 'Open',
		amt: '43',
	},
	{
		title: 'On hold',
		amt: '64',
	},
];

function App({ timeZone }) {
	const [isChecked, setIsChecked] = useState(false);
	const [dateTime, setDateTime] = useState(new Date());

	const handleInputClick = (id) => {
		setIsChecked(id === isChecked ? null : id);
	};

	useEffect(() => {
		const getDateAndTime = setInterval(() => {
			setDateTime(new Date());
		}, 30000);

		return () => clearInterval(getDateAndTime);
	}, []);

	const formatter = new Intl.DateTimeFormat(undefined, {
		timeZone,
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: 'numeric',
		minute: 'numeric',
	});
	const formatterDateAndTime = formatter.format(dateTime);

	return (
		<div>
			<div>
				<Toolbar />
				<div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
					{cardContents.map((item, index) => {
						return (
							<div key={index}>
								<div className="group cursor-pointer flex flex-col gap-4 py-6 justify-center text-center bg-white  border border-[#DFE0EB] rounded-xl hover:border-[#3751FF]">
									<h1 className="text-[#9FA2B4] font-bold text-2xl group-hover:text-[#3751FF]">
										{item.title}
									</h1>
									<p className="text-[#252733] text-6xl font-extrabold group-hover:text-[#3751FF]">
										{item.amt}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<Toolbar />
			</div>

			<div className=" lg:grid grid-cols-[70%_30%] bg-white border border-[#DFE0EB] rounded-xl">
				<div>
					<div className="mt-9 ml-8">
						<h1 className="text-[#252733] font-bold text-xl ">
							Today’s trends
						</h1>
						<p className="text-sm text-[#9FA2B4] font-normal">
							{`as of ${formatterDateAndTime}`}
						</p>
					</div>
					<ResponsiveContainer width="100%" height={400}>
						<AreaChart data={data} margin={{ left: 40, right: 10, top: 60 }}>
							<defs>
								<linearGradient id="color" x1="0" y1="1" x2="1" y2="1">
									<stop offset="0%" stopColor="#3751FF" stopOpacity={0.1} />
									<stop offset="90%" stopColor="#ffff" stopOpacity={0.05} />
								</linearGradient>
							</defs>

							<Area
								type="monotone"
								dataKey="Today"
								stroke="#3751FF"
								fill="url(#color)"
								strokeWidth="2px"
							/>

							<Area
								type="monotone"
								dataKey="Yesterday"
								stroke="#DFE0EB"
								fill="url(#color)"
								strokeWidth="2px"
							/>

							<XAxis dataKey="x" tickLine={false} tick={{ fill: '#9FA2B4' }} />

							<YAxis
								tickCount={7}
								axisLine={false}
								tickLine={false}
								orientation="right"
								tick={CustomTick}
							/>

							<Tooltip content={<CustomToolTip />} />

							<CartesianGrid opacity={0.2} vertical={false} />

							<Legend
								iconSize={15}
								iconType="line"
								align="right"
								verticalAlign="top"
								wrapperStyle={{ top: 0, right: '1rem', fontSize: '10px' }}
							/>
						</AreaChart>
					</ResponsiveContainer>
				</div>

				<div>
					<div className="flex flex-col border-l-2">
						{services.map((item, index) => {
							return (
								<div key={index}>
									<div
										className={`flex flex-col justify-center text-center py-6 px-6 ${
											index === services.length - 1 ? 'border-b-0' : 'border-b'
										}`}>
										<h1 className="text-[#9FA2B4] font-bold text-xl ">
											{item.title}
										</h1>
										<p className="text-[#252733] text-4xl font-extrabold ">
											{item.val}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Toolbar />
			<div className="mt-10 gap-12 grid lg:grid-cols-2">
				<div className="px-9 bg-white border border-[#DFE0EB] rounded-xl">
					<div className="flex justify-between items-center pt-9">
						<span className="">
							<h1 className="text-[#252733] font-semibold text-2xl">
								Unresolved tickets
							</h1>
							<p className="text-[#9FA2B4] text-sm mt-2">
								Group: <span className="text-[#4B506D]">Support</span>
							</p>
						</span>
						<h1 className="text-[#3751FF]">
							<Link to="#">View details</Link>
						</h1>
					</div>
					<div className="mt-5">
						{tickets.map((item, index) => {
							return (
								<div key={index}>
									<div className="flex justify-between items-center py-6 font-medium border-t">
										<p className="text-[#4B506D]">{item.title}</p>
										<p className="text-[#9FA2B4] ">{item.val}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="px-9 bg-white border border-[#DFE0EB] rounded-xl">
					<div className="flex justify-between items-center pt-9">
						<span>
							<h1 className="text-[#9FA2B4] font-semibold text-2xl">Tasks</h1>
							<p className="text-[#9FA2B4] text-sm mt-2">Today</p>
						</span>
						<h1 className="text-[#3751FF]">
							<Link to="#">View details</Link>
						</h1>
					</div>
					<div className="mt-5">
						{Tasks.map((item, index) => {
							return (
								<div key={index}>
									<div className="flex justify-between items-center py-5 font-medium border-t">
										<span className="flex items-center">
											<label
												htmlFor={`input${index + 1}`}
												className="flex items-center">
												<input
													id={`input${index}`}
													type="checkbox"
													className="hidden"
													checked={index === isChecked}
													// onChange={(e) => setIsChecked(e.target.checked)}
													onChange={() => handleInputClick(index)}
												/>
												<div
													id={`input${index}`}
													className="rounded-full border border-gray-400 w-5 h-5 flex justify-center items-center mr-2">
													{index ? null : <img src={inputcheck} alt="check" />}
												</div>
											</label>
											<p className="text-[#4B506D]">{item.title}</p>
										</span>
										<p
											style={{ backgroundColor: item.color }}
											className={'text-[#9FA2B4] px-2 py-1 rounded-lg'}>
											{item.val}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Toolbar />
		</div>
	);
}

export default App;
