/**
 * author      : jq <kkxujq@163.com>
 * createTime  : 2017/8/30 19:42
 * description :
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(msg: string) {
    console.log(msg);
  }

  error(msg: string) {
    console.error(msg);
  }
}
