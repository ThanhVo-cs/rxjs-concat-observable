import './style.css';

import {
  of,
  map,
  Observable,
  interval,
  merge,
  pipe,
  take,
  fromEvent,
  concat,
} from 'rxjs';

// tạo observable
const ob = interval(1000).pipe(
  take(10) // chạy 10 lần
);

const observer = {
  next(res) {
    console.log(res);
  },
  // error(err){
  //   console.error(err);
  // },
  complete() {
    console.log('completed');
  },
};

// sự kiện clicks
const clicks = fromEvent(document, 'click').pipe(take(5));

// concat => thèn này chạy xong rồi thèn kia mới chạy
const subscription = concat(clicks, ob).subscribe(observer);

// trường hợp thực tế
// update dữ liệu xong thì mới lấy danh sách dữ liệu ra
