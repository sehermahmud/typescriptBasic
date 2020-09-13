// Destructuring with Annotations in Function Example
const todaysWeather = {
  date: new Date(),
  weather: 'winter',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
