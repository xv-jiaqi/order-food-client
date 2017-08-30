/**
 * author      : jq <kkxujq@163.com>
 * createTime  : 2017/8/30 19:48
 * description :
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
