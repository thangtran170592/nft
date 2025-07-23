import ArrowIcon from "@components/icons/Arrow";
import CashbackIcon from "@components/icons/Cashback";
import CloseIcon from "@components/icons/Close";
import LiveIcon from "@components/icons/Live";
import LiveCasinoIcon from "@components/icons/LiveCasino";
import LoadingIcon from "@components/icons/Loading";
import LogoIcon from "@components/icons/Logo";
import MenuIcon from "@components/icons/Menu";
import MiniGameIcon from "@components/icons/MiniGame";
import RacingIcon from "@components/icons/Racing";
import SportRaceIcon from "@components/icons/SportRace";

const icons = {
  arrow: ArrowIcon,
  cashback: CashbackIcon,
  close: CloseIcon,
  live: LiveIcon,
  liveCasino: LiveCasinoIcon,
  loading: LoadingIcon,
  menu: MenuIcon,
  miniGame: MiniGameIcon,
  racing: RacingIcon,
  sportRace: SportRaceIcon,
  logo: LogoIcon,
  mobileLogo: LogoIcon,
} as const;

type IconName = keyof typeof icons;

export default function Icon({
  name,
  width = 24,
  height = 24,
  className,
  ...props
}: {
  name: IconName;
  size?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>) {
  const SvgIcon = icons[name];
  return (
    <SvgIcon
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}
