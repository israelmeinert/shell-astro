// host-app/src/types/remote-app.d.ts
declare module 'remote_app/Button' {
  const Button: React.FC<{
    text: string;
    onClick?: () => void;
  }>;
  export default Button;
}

declare module 'remote_app/Header' {
  const Header: React.FC;
  export default Header;
}

declare module 'remote_app/PieChart' {
  const PieChart: React.FC<{
    gastos: number;
    receitas: number;
    title?: string;
  }>;
  export default PieChart;
}