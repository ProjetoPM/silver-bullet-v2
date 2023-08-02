import { dashboardItems } from 'src/mapping/'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DashboardCard } from 'src/components/Dashboard/Card'
import { Search } from 'src/components/Dashboard/Search'
import { NoResults } from 'src/components/Dashboard/Search/styles'
import { compareUri } from 'src/functions/compareUri'
import { showOverflow } from 'src/functions/showOverflow'
import { i18n } from 'src/i18n'
import { getAllPhases } from 'src/mapping/phases'
import { Box, Cards, Dashboard, Title } from './styles'

export const DashboardMenu = () => {
  const [search, setSearch] = useState('')
  const merge = [...getAllPhases()]

  const filtered =
    search.length > 0
      ? merge.filter(item => item.title.toLowerCase().includes(search))
      : dashboardItems

  return (
    <Dashboard>
      <Box>
        <Title>
          {search.length === 0
            ? i18n('modal.menu.areas')
            : i18n('modal.menu.phases')}
        </Title>
        <Search
          placeholder={i18n('modal.menu.search')}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Box>
      <Cards>
        {search.length === 0 &&
          filtered.map(item => {
            return (
              <DashboardCard
                key={item.id}
                title={item.title}
                colors={item.colors}
                icon={item.icon}
                description={item.description}
                onClick={() => {
                  showOverflow()
                  window.location.href = `/menu/${item.title.toLowerCase()}`
                }}
              />
            )
          })}
        {search.length > 0 &&
          filtered.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                target={item.target}
                onClick={e => {
                  showOverflow()
                  compareUri(item.to) && e.preventDefault()
                }}
              >
                <DashboardCard
                  title={item.title}
                  sx={{
                    card: 'p-4 pt-8 pb-3 h-32 rounded-md flex flex-col',
                    title:
                      'pl-3 text-center h-full items-center justify-center',
                  }}
                  description={item.description}
                  colors={item.colors}
                  badges={item.badges}
                  badgesColors={item.badgesColors}
                  disabled={compareUri(item.to)}
                />
              </Link>
            )
          })}
        {filtered.length === 0 && (
          <NoResults>{i18n('modal.menu.noResults')}</NoResults>
        )}
      </Cards>
    </Dashboard>
  )
}
