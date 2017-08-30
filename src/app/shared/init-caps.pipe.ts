/**
 * author      : jq <kkxujq@163.com>
 * createTime  : 2017/8/30 19:28
 * description :
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform = (value: string) => value;
}
