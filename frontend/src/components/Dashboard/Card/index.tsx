import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Card, CardProps, Description, Title } from './styles'

interface DashboardCardProps extends CardProps {
  title: string
  description?: string
  icon?: IconProp
  badges?: string[]
  disabled?: boolean
  badgesColors?: string[]
  onClick?: () => void
}

export const DashboardCard = ({
  title,
  description,
  colors,
  icon,
  sx,
  badges,
  badgesColors,
  disabled = false,
  onClick,
}: DashboardCardProps) => {
  return (
    <>
      <Card onClick={onClick} colors={colors} sx={sx} disabled={disabled}>
        <Title sx={sx}>
          {icon && <FontAwesomeIcon icon={icon} size={'sm'} />}
          {title}
        </Title>
        {description && <Description sx={sx}>{description}</Description>}
        {badges && badges.length >= 1 && (
          <div className="mt-2">
            <Badge badgecolor={badgesColors && badgesColors[0]}>
              {badges[0]}
            </Badge>
            <Badge badgecolor={badgesColors && badgesColors[1]}>
              {badges[1]}
            </Badge>
          </div>
        )}
      </Card>
    </>
  )
}
