import CashbackIcon from '@components/icons/Cashback';
import LiveIcon from '@components/icons/Live';
import LiveCasinoIcon from '@components/icons/LiveCasino';
import MiniGameIcon from '@components/icons/MiniGame';
import RacingIcon from '@components/icons/Racing';
import SportRaceIcon from '@components/icons/SportRace';
import { QuickAccess } from '@src/types/QuickAccess';

export const quickAccesses: QuickAccess[] = [
    {
        id: 0,
        label: 'Free to earn',
        url: '/free-to-earn',
        icon: CashbackIcon
    },
    {
        id: 1,
        label: 'Ranking',
        url: '/ranking',
        icon: SportRaceIcon
    },
    {
        id: 2,
        label: 'Video-NFT',
        url: '/video-nft',
        icon: LiveIcon
    },
    {
        id: 3,
        label: 'How to buy',
        url: '/how-to-buy',
        icon: RacingIcon
    },
    {
        id: 4,
        label: 'New NFTS',
        url: '/new-NFTS',
        icon: LiveCasinoIcon,
        subLabel: 'New'
    },
    {
        id: 5,
        label: 'Roadmaps',
        url: '/roadmaps',
        icon: MiniGameIcon
    }
]