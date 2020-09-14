// 4. Flexible - arrays can still contain multiple different types

// with annotation
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2020-11-24');
importantDates.push(new Date());

// without annotation
const importantDates1 = [new Date(), '2021-4-13'];
importantDates1.push('2020-11-24');
importantDates1.push(new Date());
