const TSadd = (a: number, b: number): number => {
  return a + b;
};

const TSsubtract = (a, b) => {
  return a - b;
};

const TSmultiply = function (a: number, b: number): number {
  return a * b;
};

function TSdivide(a: number, b: number): number {
  return a / b;
}

const TSlogger = (message: string): void => {
  console.log(message);
};

const TSthrowError = (message: string): never => {
  throw new Error(message);
};

const TStodaysWeather = {
  date: new Date(),
  weather: 'winter',
};

const TSlogWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(TStodaysWeather);
