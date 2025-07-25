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
        url: '/',
        icon: CashbackIcon
    },
    {
        id: 1,
        label: 'Ranking',
        url: '/',
        icon: SportRaceIcon
    },
    {
        id: 2,
        label: 'Video-NFT',
        url: '/',
        icon: LiveIcon
    },
    {
        id: 3,
        label: 'How to buy',
        url: '/',
        icon: RacingIcon
    },
    {
        id: 4,
        label: 'New NFTS',
        url: '/',
        icon: LiveCasinoIcon,
        subLabel: 'New'
    },
    {
        id: 5,
        label: 'Roadmaps',
        url: '/',
        icon: MiniGameIcon
    }
]