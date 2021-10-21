import { FC } from 'react'
import { TArg, classnames } from 'classnames/tailwind'

const root = classnames('py-10', 'max-w-4xl', 'px-4', 'm-auto')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

const bodyText = classnames(
  'text-white',
  'text-2xl',
  'md:text-3xl',
  'font-bold',
  'mb-4'
)
const BodyText: FC<{ className?: TArg }> = ({ children, className }) => {
  return <p className={classnames(bodyText, className)}>{children}</p>
}

const link = classnames('underline')
const Link: FC<{ url: string }> = ({ children, url }) => {
  return (
    <a href={url} target="_blank" className={link} rel="noopener noreferrer">
      {children}
    </a>
  )
}

const App = () => {
  return (
    <Root>
      <BodyText>
        Сап! Это <Link url="https://borodutch.com">Никита</Link>.
      </BodyText>
      <BodyText>
        Совсем недавно мы{' '}
        <Link url="https://ca.finance.yahoo.com/news/big-whale-labs-raises-655k-160900123.html">
          подняли
        </Link>{' '}
        пре-сид раунд от Slow, Samsung, 1inch и других на наш NFT проект.
      </BodyText>
      <BodyText className="text-indigo-400">
        Я заметил, что среди NFT проектов много русскоязычных фаундеров — и
        решил поискать сообщества, где можно обмениваться опытом, советами и
        просто обсуждать свои NFT проекты.
      </BodyText>
      <BodyText className="text-pink-400">
        К сожалению, либо таких сообществ нет, либо они полны вонаби и вот этим
        всяким "ищу партнеров для запуска своей NFT коллекции". Ну это стыд и
        позор не разобраться в каком-нибудь ERC-721 или хотя бы интерфейсе
        OpenSea.
      </BodyText>
      <BodyText className="text-purple-400">
        Поэтому я создал свое сообщество для русскоязычных фаундеров NFT
        проектов! Обещаю: никаких вонаби или искателей партнеров. Мы просто
        собираемся вместе и обсуждаем свои проекты!
      </BodyText>
      <BodyText className="text-red-400">
        Я буду выжигать любые попытки просочиться в сообщество людей, не
        подходящих ему по духу.
      </BodyText>
      <BodyText className="text-yellow-400">
        Сообщество бесплатное и открытое. Смело ставьте его на мьют. Открывайте,
        когда вам нужна будет помощь, если захотите пообщаться на тему NFT или
        захотите посмотреть "что там у других".
      </BodyText>
      <BodyText className="text-blue-400">
        Правило одно и очень простое: не токсичьте. Это безопасное место для
        фаундеров NFT стартапов, где можно просто чиллить.
      </BodyText>
      <BodyText className="text-green-400">
        <Link url="https://t.me/NFTFounders">
          Подключайтесь к @NFTFounders!
        </Link>
      </BodyText>
    </Root>
  )
}

export default App
