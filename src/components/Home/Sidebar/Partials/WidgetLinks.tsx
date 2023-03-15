import { SideBarMainHeading } from '@/styles/SharedStyles'
import { SidebarWidgetLink, WidgetLinksStyle } from '@/styles/SidebarWidgetStyles'
import React from 'react'

export default function WidgetLinks() {
	return (
		<WidgetLinksStyle>
			<SideBarMainHeading>IMDb Charts </SideBarMainHeading>
			<SidebarWidgetLink href="https://www.imdb.com/chart/boxoffice/?ref_=nv_ch_cht">Box Office</SidebarWidgetLink>
			<SidebarWidgetLink href="https://www.imdb.com/chart/moviemeter/?ref_=nv_ch_mpm">Most Popular Movies</SidebarWidgetLink>
			<SidebarWidgetLink href="https://www.imdb.com/chart/moviemeter/?ref_=nv_ch_mpm">Top Rated Movies</SidebarWidgetLink>
			<SidebarWidgetLink href="https://www.imdb.com/chart/top/?ref_=nv_mv_250" className='selected' >Top 250 Movies</SidebarWidgetLink>
			<SidebarWidgetLink href="https://www.imdb.com/chart/moviemeter/?ref_=nv_ch_mpm">Most Popular TV Shows</SidebarWidgetLink>
			<SidebarWidgetLink href="https://www.imdb.com/chart/moviemeter/?ref_=nv_ch_mpm">Top Rated TV Shows</SidebarWidgetLink>


		</WidgetLinksStyle>
	)
}
