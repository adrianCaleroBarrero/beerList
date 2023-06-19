export class StoreService {
  localStorage: Storage;
  private key: string;
  private filterKey: string;
  public data: string[];
  public filters: string[];
  constructor(localStorage: Storage) {
    this.localStorage = localStorage;
    this.key = "beers";
    this.filterKey = "filters";
    this.data = [];
    this.filters = [];
  }

  private checkIsAdded(id: string): boolean {
    const data: string[] = JSON.parse(
      this.localStorage.getItem(this.key) as string
    );
    return data?.some((idAdded) => id === idAdded);
  }

  add(id: string) {
    if (!this.checkIsAdded(id)) {
      this.data = JSON.parse(this.localStorage.getItem(this.key) as string);
      if (this.data)
        this.localStorage.setItem(this.key, JSON.stringify([id, ...this.data]));
      else this.localStorage.setItem(this.key, JSON.stringify([id]));
    }
  }

  addFilter(id: string) {
    this.filters = JSON.parse(
      this.localStorage.getItem(this.filterKey) as string
    );
    console.log(id);
    if (this.filters)
      this.localStorage.setItem(
        this.filterKey,
        JSON.stringify([id, ...this.filters])
      );
    else this.localStorage.setItem(this.filterKey, JSON.stringify([id]));
  }

  delete(id: string) {
    const userData: string[] = JSON.parse(
      this.localStorage.getItem(this.key) as string
    );
    if (userData?.length !== 0) {
      const index = userData.indexOf(id);
      userData.splice(index, 1);
      this.localStorage.setItem(this.key, JSON.stringify(userData));
    }
  }

  deleteFilter(id: string) {
    const filterData: string[] = JSON.parse(
      this.localStorage.getItem(this.filterKey) as string
    );
    if (filterData) {
      const index = filterData?.indexOf(id);
      filterData.splice(index, 1);
      this.localStorage.setItem(this.filterKey, JSON.stringify(filterData));
    }
  }

  deleteAllFilters() {
    this.localStorage.setItem(this.filterKey, JSON.stringify([]));
  }

  getAdded() {
    const userData: string[] = JSON.parse(
      this.localStorage.getItem(this.key) as string
    );
    return userData;
  }

  getFilters() {
    const filterData: string[] = JSON.parse(
      this.localStorage.getItem(this.filterKey) as string
    );
    return filterData;
  }
}
