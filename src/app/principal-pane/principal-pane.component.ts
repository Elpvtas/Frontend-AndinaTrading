import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, NgFor, NgIf} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-principal-pane',
  standalone: true,
  imports: [NgFor, FormsModule ,NgIf],
  templateUrl: './principal-pane.component.html',
  styleUrl: './principal-pane.component.css',
})
export class PrincipalPaneComponent {

  symbolPrices: { [symbol: string]: number } = {
    ECO: 108.33,
    MSFT: 883.12,
    GOOGL: 742.46,
    AMZN: 648.55,
    META: 475.38,
    TSLA: 902.77,
    NVDA: 731.24,
    'BRK.B': 336.52,
    JPM: 559.61,
    JNJ: 604.92,
    V: 974.13,
    UNH: 682.41,
    HD: 356.07,
    PG: 681.88,
    XOM: 582.44,
    MA: 508.27,
    PFE: 691.30,
    KO: 267.96,
    DIS: 527.65,
    NFLX: 913.05,
    INTC: 122.58,
    BA: 663.91,
    WMT: 335.60,
    CSCO: 636.20,
    PYPL: 846.73,
    T: 899.43,
    VZ: 687.54,
    UNP: 808.92,
    MMM: 715.02,
    CAT: 294.63,
    RTX: 261.79,
    GS: 774.21,
    BABA: 248.99,
    MRK: 529.17,
    IBM: 296.40,
    ACN: 823.56,
    MS: 634.88,
    LMT: 905.44,
    CVX: 771.72,
    AMGN: 524.09,
    AMT: 197.31,
    CL: 575.80,
    BIIB: 313.57,
    SPG: 678.42,
    COF: 252.15,
    MCD: 845.66,
    COP: 467.38,
    WBA: 362.89,
    CB: 876.21,
    NSC: 437.05,
    SLB: 640.47,
    SYK: 919.62,
    TMO: 410.33,
    DHR: 319.14,
    LHX: 537.58,
    ZTS: 140.29,
    ISRG: 993.22,
    SYY: 153.06,
    ADBE: 948.75,
    MDT: 646.18,
    COST: 786.44,
    MSCI: 932.51,
    SBUX: 214.09,
    GM: 703.66,
    F: 148.32,
    ADP: 404.90,
    AXP: 715.41,
    FIS: 210.37,
    FISV: 284.03,
    AIG: 593.78,
    TDG: 471.02,
    PXD: 557.91,
    EOG: 135.44,
    PLD: 385.69,
    CME: 690.73,
    VRTX: 414.66,
    DE: 764.11,
    BMY: 520.28,
    ZBH: 194.87,
    KMB: 611.26,
    NTAP: 329.74,
    APD: 487.32,
    STZ: 603.90,
    WM: 170.82,
    PSA: 918.04,
    EQIX: 967.12,
    CCI: 415.23,
    PGR: 298.56,
    AFL: 286.45,
    OXY: 647.27,
    DD: 718.50,
    LRCX: 843.77,
    EFX: 689.64,
    MU: 121.08,
    CSX: 413.92,
    BAX: 504.27,
    INTU: 704.63,
    HUM: 726.48,
    HLT: 932.84,
    TGT: 890.70,
    GIS: 599.31,
    CHTR: 858.19,
    GILD: 207.22,
    MRNA: 114.73,
    KLAC: 987.55,
    PEP: 438.66,
    MELI: 936.41,
    XEL: 473.80,
    RSG: 285.04,
    CNC: 359.92,
    CBOE: 628.17,
    EXC: 226.11,
    LUV: 344.79,
    REGN: 558.37,
    AMAT: 955.48,
    DXC: 359.60,
    NOC: 816.03,
    C: 634.22,
    WDC: 381.74,
    UBER: 517.05,
    COO: 252.26,
    CTSH: 696.57,
    SBAC: 182.04,
    AON: 801.62,
    SRE: 271.80,
    HCA: 898.31,
    STT: 261.10,
    VLO: 877.44,
    CARR: 498.27,
    VFC: 309.72,
    LULU: 918.65,
    TROW: 316.50,
    CTAS: 569.91,
    RTN: 453.36,
    ABBV: 787.11,
    BDX: 238.64,
    EMR: 342.76,
    TSN: 674.80,
    SWKS: 704.15,
    WELL: 619.99,
    TFX: 152.74,
    CHD: 493.87,
    WMB: 240.51,
    GE: 884.09,
    AVGO: 909.32,
    WEC: 308.40,
    DOV: 557.01,
    FTV: 566.96,
    MCHP: 856.18,
    USB: 312.47,
    CPB: 184.50,
    NUE: 518.39,
    OKE: 679.16,
    AVY: 169.24,
    SO: 836.45,
    MRO: 556.22,
    SJM: 228.55,
    TAP: 788.70,
    XRX: 696.20,
    NEM: 890.14,
    RCL: 430.78,
    ZBRA: 450.83,
    RHI: 272.43,
    PNC: 651.09,
    ABT: 467.40,
    APTV: 557.39,
    EQR: 410.52,
    JCI: 476.66,
    SNA: 599.32,
    IDXX: 747.13,
    ETN: 973.58,
    ORLY: 892.71,
    TRV: 130.06,
    GPC: 847.28,
    VTRS: 260.83,
    FTNT: 921.46,
    IQV: 952.18,
    HAS: 101.55,
    ORCL: 403.36,
    TYL: 384.61,
    PKG: 597.77,
    SHW: 866.09,
    NVR: 219.46,
    FFIV: 489.68,
    MCO: 602.55,
    HRL: 229.83,
    CBRE: 728.19,
    EXR: 215.44,
    LYB: 940.62,
    RHT: 576.30,
    AEE: 515.71,
    TPR: 900.42,
    CLX: 430.20,
    MKTX: 686.23,
    SPLK: 563.41,
    NKE: 361.75,
    RMD: 933.66,
    HES: 771.88,
    HII: 423.19,
    VRSN: 812.50,
    VRTS: 597.24,
    TRIP: 371.02,
    FMC: 132.49,
    AAPL: 125.75,   // precio que ya tenías
    BXP: 188.33,
    SNPS: 857.47,
    KMX: 278.69,
    CPRT: 701.16,
    ANET: 640.55,
    MKC: 317.74,
    IFF: 549.63,
    NWL: 481.28,
    GRMN: 262.14,
    HRS: 931.22,
    TPX: 112.17,
    ALB: 415.92,
    ESS: 534.69,
    AEP: 625.38,
    GOOG: 793.04,
    HPE: 235.81,
    PRU: 873.57,
    CE: 199.08,
    CVS: 699.95,
    SNAP: 115.22,
    SPGI: 972.71,
    NEE: 809.37,
    LOW: 693.14,
    OMC: 548.63,
    FLIR: 429.56
  };


  sp500Symbols: string[] = [
    'ECO', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'NVDA', 'BRK.B', 'JPM', 'JNJ', 'V', 'UNH', 'HD', 'PG', 'XOM',
    'MA', 'PFE', 'KO', 'DIS', 'NFLX', 'INTC', 'BA', 'WMT', 'CSCO', 'NVDA', 'PYPL', 'T', 'VZ', 'UNP', 'MMM', 'CAT',
    'RTX', 'GS', 'BABA', 'MRK', 'IBM', 'ACN', 'MS', 'LMT', 'CVX', 'AMGN', 'AMT', 'CL', 'BIIB', 'SPG', 'COF', 'MCD',
    'COP', 'RTX', 'WBA', 'CB', 'NSC', 'SLB', 'SYK', 'GS', 'TMO', 'DHR', 'LHX', 'ZTS', 'ISRG', 'SYY', 'ADBE', 'MDT',
    'COST', 'MSCI', 'SBUX', 'GM', 'F', 'KO', 'ADP', 'AXP', 'FIS', 'FISV', 'AIG', 'TDG', 'PXD', 'EOG', 'PLD', 'CME',
    'VRTX', 'DE', 'BMY', 'ZBH', 'BA', 'KMB', 'NTAP', 'APD', 'STZ', 'WM', 'PSA', 'EQIX', 'CCI', 'PGR', 'AFL', 'OXY',
    'DD', 'LRCX', 'EFX', 'MU', 'CSX', 'BAX', 'INTU', 'HUM', 'HLT', 'TGT', 'GIS', 'CHTR', 'GILD', 'MRNA', 'KLAC', 'PEP',
    'MELI', 'XEL', 'RSG', 'CNC', 'CBOE', 'EXC', 'LUV', 'REGN', 'AMAT', 'DXC', 'NOC', 'C', 'STZ', 'WDC', 'TMO', 'TSLA',
    'UBER', 'COO', 'CTSH', 'SBAC', 'AON', 'SRE', 'HCA', 'STT', 'VLO', 'CARR', 'VFC', 'LULU', 'TROW', 'CTAS', 'MSCI',
    'UNH', 'BAX', 'RTN', 'FISV', 'SYY', 'KLAC', 'ABBV', 'BDX', 'EMR', 'TSN', 'DD', 'PGR', 'SWKS', 'AMAT', 'WELL', 'TFX',
    'CHD', 'SYK', 'EFX', 'WMB', 'GE', 'AVGO', 'WEC', 'DOV', 'FTV', 'MCHP', 'REGN', 'USB', 'CPB', 'NUE', 'LUV', 'OKE',
    'AVY', 'SO', 'MRO', 'SJM', 'TAP', 'XRX', 'NEM', 'RCL', 'ZBRA', 'RHI', 'PNC', 'ABT', 'APTV', 'LHX', 'EQR', 'JCI',
    'SNA', 'IDXX', 'ETN', 'ORLY', 'TRV', 'GPC', 'HUM', 'VTRS', 'V', 'FTNT', 'MCHP', 'DE', 'REGN', 'MRNA', 'IQV', 'SYY',
    'HAS', 'ORCL', 'TYL', 'HCA', 'VRTX', 'PKG', 'IDXX', 'SHW', 'NVR', 'FFIV', 'AON', 'JPM', 'MCO', 'PEP', 'T', 'VZ', 'HRL',
    'CBRE', 'EXR', 'CHTR', 'LMT', 'LYB', 'MSCI', 'PGR', 'RHT', 'AEE', 'FIS', 'CBOE', 'OXY', 'TPR', 'APD', 'ZBH', 'CLX',
    'WM', 'VLO', 'AVGO', 'VFC', 'DHR', 'AIG', 'MKTX', 'SPLK', 'NKE', 'AFL', 'NSC', 'RMD', 'LHX', 'HES', 'TDG', 'HII',
    'PNC', 'HOLX', 'VRSN', 'VLO', 'VRTS', 'TRIP', 'FMC', 'NTAP', 'AAPL', 'LULU', 'BXP', 'SNPS', 'KMX', 'CPRT', 'ANET',
    'MKC', 'IFF', 'NWL', 'GRMN', 'HRS', 'RCL', 'TPX', 'ALB', 'IQV', 'NEM', 'SWKS', 'ESS', 'BAX', 'MMM', 'HAS', 'AEP',
    'GOOG', 'UNP', 'AMAT', 'TROW', 'MRO', 'HPE', 'CNC', 'ZTS', 'KMB', 'PEP', 'NKE', 'CSX', 'MS', 'EXC', 'PRU', 'STZ',
    'ETN', 'SBAC', 'BAX', 'MDT', 'TMO', 'PXD', 'CE', 'HCA', 'SBUX', 'JCI', 'SYY', 'DHR', 'ACN', 'STT', 'V', 'HUM', 'XOM',
    'CVS', 'JCI', 'LUV', 'SNAP', 'SPG', 'WBA', 'BMY', 'AMGN', 'ANSS', 'CSX', 'PEP', 'DIS', 'FISV', 'IBM', 'PEP', 'SBUX',
    'CSX', 'BRK.B', 'FB', 'LMT', 'CVX', 'GE', 'WMT', 'GM', 'MCO', 'SPGI', 'NEE', 'MSCI', 'TMO', 'T', 'NSC', 'ADBE', 'MCK',
    'UNH', 'DHR', 'AON', 'AVY', 'AEP', 'RSG', 'FIS', 'CHTR', 'GPC', 'WEC', 'XEL', 'LOW', 'OMC', 'DHR', 'FISV', 'ACN', 'FLIR'
  ];




  filteredSymbols: string[] = [...this.sp500Symbols]; // Para almacenar los símbolos filtrados

  searchQuery: string = ''; // Para almacenar el texto de búsqueda

  private widget: any; // Referencia al widget de TradingView
  private isBrowser = false;
  public symbol: string = 'AAPL'; // Variable que almacena el símbolo seleccionado
  public  stockPrice : number =125.5;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.type = 'text/javascript';

      script.onload = () => {
        // @ts-ignore
        this.widget = new TradingView.widget({
          container_id: 'tradingview_12345',
          width: '100%',
          height: '440px',
          symbol: this.symbol, // Usamos la variable 'symbol' aquí
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          hide_top_toolbar: false,
          save_image: false,
          studies: ['MACD@tv-basicstudies'],
        });
      };

      document.body.appendChild(script);
    }
  }

  // Este método se llama cuando un usuario hace clic en un símbolo de la tabla
  showSymbol(symbol: string): void {
    this.symbol = symbol; // Actualiza la variable de símbolo
    this.stockPrice = this.symbolPrices[this.symbol];
    if (this.widget) {
      this.widget.remove(); // Elimina el gráfico anterior
      this.ngAfterViewInit(); // Vuelve a cargar el gráfico con el nuevo símbolo
    }
  }

  // Método para filtrar los símbolos basado en el término de búsqueda
  filterSymbols(): void {
    this.filteredSymbols = this.sp500Symbols.filter(symbol =>
      symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }



  sharesOwned = 0;
  buyQuantity = 1;

  increaseQuantity() {
    this.buyQuantity++;
  }

  decreaseQuantity() {
    if (this.buyQuantity > 1) {
      this.buyQuantity--;
    }
  }

  buyStock() {
    this.sharesOwned += this.buyQuantity;
  }

  sellStock() {
    if (this.sharesOwned > 0) {
      this.sharesOwned--;
    }
  }

}
