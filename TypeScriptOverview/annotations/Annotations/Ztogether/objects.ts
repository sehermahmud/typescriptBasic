// Annotations Around Objects

const TSprofile = {
  TSnames: 'zizali',
  TSage: 14,
  TScoords: {
    TSlat: 0,
    TSlng: 15,
  },
  setTSage(TSage: number): void {
    this.TSage = TSage;
  },
};

const { TSage, TSnames }: { TSage: number; TSnames: string } = TSprofile;
const {
  TScoords: { TSlat, TSlng },
}: { TScoords: { TSlat: number; TSlng: number } } = TSprofile;
