export interface item {
  id: number,
  title: string,
  url: string,
  alt?: string,
  icon?: string,
  className?: string,
  sub?: item[]    // Incase You want to do some nested thing.
}
