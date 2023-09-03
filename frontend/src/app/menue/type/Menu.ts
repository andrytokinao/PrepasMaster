export type Menu = {
  name: string,
  iconClass: string,
  active: boolean,
  accessible:boolean
  submenu: { name: string, url: string ,accessible:boolean }[]
}
