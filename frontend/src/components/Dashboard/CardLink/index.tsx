import { Link } from 'react-router-dom'
import { Colors } from 'src/components/Accordion/styles'
import { showOverflow } from 'src/functions/showOverflow'
import { DashboardCard } from '../Card'

interface CardLinkProps {
  to: string
  title: string
  description?: string
  target?: '_blank' | '_self'
  colors?: Colors
  search?: boolean
}

export const CardLink = ({
  title,
  description,
  target,
  to,
  colors,
}: CardLinkProps) => {
  return (
    <Link to={to} target={target} onClick={showOverflow}>
      <DashboardCard
        title={title}
        sx={{
          card: 'p-6 h-28 rounded-md flex flex-col',
          title: 'text-center h-full items-center justify-center',
        }}
        description={description}
        colors={colors}
      />
    </Link>
  )
}
