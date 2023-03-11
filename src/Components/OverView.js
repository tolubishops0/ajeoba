import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ticket from '../Assets/tickets.svg';
import idea from '../Assets/idea.svg';
import contract from '../Assets/contracts.svg';
import settings from '../Assets/settins.svg';
import sub from '../Assets/sub.svg';
import agents from '../Assets/agents.svg';
import art from '../Assets/article.svg';
import overview from '../Assets/overview.svg';
import Logo from './LightComp/Logo';
import { Icon } from '@mui/material';
import Charts from './Charts';
import Header from './LightComp/Header';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
	const navTopLinks = [
		{
			title: 'Overview',
			img: overview,
			link: '/',
		},
		{
			title: 'Tickets',
			img: ticket,
			link: '/tickets',
		},
		{
			title: 'Ideas',
			img: idea,
			link: '/#',
		},
		{
			title: 'Contract',
			img: contract,
			link: '/#',
		},
		{
			title: 'Agents',
			img: agents,
			link: '/#',
		},
		{
			title: 'Articles',
			img: art,
			link: '/#',
		},
	];
	const navBottomLinks = [
		{
			title: 'Settings',
			img: settings,
			link: '/#',
		},
		{
			title: 'Subscription',
			img: sub,
			link: '/#',
		},
	];

	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div className="bg-[#363740] h-full">
			<Logo />
			<Toolbar />

			<List>
				{navTopLinks.map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton
							href={item.link}
							sx={{
								color: '#A4A6B3',
								'&:hover': {
									color: '#DDE2FF',
									bgcolor: '#252733',
								},
								'&:acive': {
									color: '#DDE2FF',
									bgcolor: '#252733',
								},
							}}>
							<ListItemIcon>
								<Icon>
									<img src={item.img} alt="imageicons" />
								</Icon>
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider sx={{ bgcolor: '#A4A6B3' }} />
			<List>
				{navBottomLinks.map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton
							href={item.link}
							sx={{
								color: '#A4A6B3',
								'&:hover': {
									color: '#DDE2FF',
									bgcolor: '#252733',
								},
								'&:acive': {
									color: '#DDE2FF',
									bgcolor: '#252733',
								},
							}}>
							<ListItemIcon>
								<img src={item.img} alt="imagecons" />
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					boxShadow: 0,
					bgcolor: '#F7F8FC',
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}>
				<div className="md:hidden flex justify-between items-center px-4 pt-8">
					<IconButton
						color="blue"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon fontSize="medium" />
					</IconButton>

					<h1 className="font-extrabold text-3xl text-left text-[#252733]">
						Overview
					</h1>
				</div>
				<Header />
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					bgcolor: '#F7F8FC',
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />

				<Typography component={'div'}>
					<Charts />
				</Typography>
			</Box>
		</Box>
	);
}

export default ResponsiveDrawer;
